package com.mvgm.snug_server.infra.security.config;

import com.mvgm.snug_server.core.usecases.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.List;
import org.springframework.web.filter.CorsFilter;

import static com.mvgm.snug_server.core.domain.enums.UserRole.ADMIN;
import static com.mvgm.snug_server.core.domain.enums.UserRole.USER;
import static com.mvgm.snug_server.utils.Constants.BASE_URL;
import static com.mvgm.snug_server.utils.Logging.LOGGER;

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class WebSecurityConfig {

    private final JwtAuthenticationFilter jwtFilter;
    private final AuthenticationProvider authProvider;
    private final String USER_ROLE = "ROLE_" + USER.name();
    private final String ADMIN_ROLE = "ROLE_" + ADMIN.name();

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable());
        http.cors(cors -> cors.configurationSource(corsConfigurationSource())); // Habilitando CORS

        http.authorizeHttpRequests(auth -> {
            auth.requestMatchers(BASE_URL + "/public/**").permitAll();
            auth.requestMatchers(BASE_URL + "/users/**").hasAnyAuthority(USER_ROLE, ADMIN_ROLE);
            auth.anyRequest().authenticated();
        });

        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authProvider)
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    // Método para configuração de CORS
    @Bean
    public UrlBasedCorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // Verifica se é ambiente de desenvolvimento
        boolean isDevelopment = Boolean.parseBoolean(System.getenv("DEV"));
        if (isDevelopment) {
            config.setAllowCredentials(true); // Permite envio de cookies e credenciais
            config.setAllowedOrigins(List.of("http://localhost:3000")); // Permite o frontend React
            config.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
            config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        } else {
            config.setAllowedOrigins(List.of()); // Bloqueia todas as origens fora do dev
            config.setAllowedMethods(List.of()); // Não permite métodos fora do dev
        }

        source.registerCorsConfiguration("/**", config);
        return source;
    }
}