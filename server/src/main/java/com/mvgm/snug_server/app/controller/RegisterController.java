package com.mvgm.snug_server.app.controller;

import com.mvgm.snug_server.app.dtos.UserDto;
import com.mvgm.snug_server.core.Mappers.UserMapper;
import com.mvgm.snug_server.core.usecases.RegisterUser;
import com.mvgm.snug_server.core.usecases.ConfirmToken;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.mvgm.snug_server.utils.Constants.BASE_URL;

@RequiredArgsConstructor
@RequestMapping(BASE_URL + "/public/register")
@RestController
public class RegisterController {
    private final RegisterUser service;
    private final ConfirmToken confirmTokenUseCase;

    @PostMapping("/users")
    public ResponseEntity<String> registerUser(@RequestBody UserDto userDto) {
        return ResponseEntity
                .status(201)
                .body(service.execute(UserMapper.convert.toEntity(userDto)));
    }

    @GetMapping("/tkn/confirm")
    public ResponseEntity<String> confirmToken(@RequestParam("token") String token) {
        confirmTokenUseCase.execute(token);
        return ResponseEntity.status(204).build();
    }
}
