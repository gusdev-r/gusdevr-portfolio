package com.mvgm.snug_server.app.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record TokenDto(@JsonProperty("token") String token){
}
