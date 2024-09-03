package com.mvgm.snug_server.core.Mappers;

import com.mvgm.snug_server.app.dtos.UserDto;
import com.mvgm.snug_server.infra.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserMapper convert = Mappers.getMapper(UserMapper.class);
    UserDto toDto(User user);
    List<UserDto> toDtoList(List<User> userList);
    User toEntity(UserDto userDto);
}
