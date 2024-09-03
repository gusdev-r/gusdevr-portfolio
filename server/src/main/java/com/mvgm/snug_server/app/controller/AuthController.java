package com.mvgm.snug_server.app.controller;

import com.mvgm.snug_server.app.dtos.AuthDto;
import com.mvgm.snug_server.app.dtos.TokenDto;
import com.mvgm.snug_server.core.usecases.AuthUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.mvgm.snug_server.utils.Constants.BASE_URL;

@RequiredArgsConstructor
@RequestMapping(BASE_URL + "/public/user/auth")
@RestController
public class AuthController {

    private final AuthUser auth;

    @PostMapping()
    public ResponseEntity<TokenDto> authUser(@RequestBody AuthDto authDto) {
        return ResponseEntity.status(201).body(auth.execute(authDto));
    }
}
