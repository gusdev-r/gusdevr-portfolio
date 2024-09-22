package com.mvgm.snug_server.app.dtos;

import lombok.Builder;

@Builder
public record AuthDto (String username, String password){
}
