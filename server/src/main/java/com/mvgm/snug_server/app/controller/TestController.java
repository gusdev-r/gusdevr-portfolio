package com.mvgm.snug_server.app.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static com.mvgm.snug_server.utils.Constants.BASE_URL;

@RestController
@RequestMapping(BASE_URL + "/public/test")
public class TestController {

    @GetMapping()
    public ResponseEntity<String> testHello () {
        return ResponseEntity.ok("Hello World!");
    }
}
