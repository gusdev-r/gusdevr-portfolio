package com.mvgm.snug_server.app.controller;

import com.mvgm.snug_server.app.dtos.UserDto;
import com.mvgm.snug_server.core.Mappers.UserMapper;
import com.mvgm.snug_server.core.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.mvgm.snug_server.utils.Constants.BASE_URL;

@RequiredArgsConstructor
@RestController
@RequestMapping(BASE_URL + "/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    @GetMapping("/all")
    public ResponseEntity<List<UserDto>> findAllUsers() {
        return ResponseEntity.status(200).body(userMapper.toDtoList(userService.findAll()));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> findUser(@PathVariable Long userId) {
        return ResponseEntity.status(200).body(userMapper.toDto(userService.findById(userId)));
    }

    @DeleteMapping("{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        return ResponseEntity.status(204).body(null);
    }

    @PutMapping("update/{userId}")
    public ResponseEntity<String> updateUser(@PathVariable Long userId, @RequestBody UserDto userDto) {
        userService.updateUser(UserMapper.convert.toEntity(userDto), userId);
        return ResponseEntity.status(200).body("User updated successfully!");
    }
    @GetMapping("/test")
    public ResponseEntity<String> testHello () {
        return ResponseEntity.ok("Hello World!");
    }
}
