package com.mvgm.snug_server.utils;

public class Regex {
    public static final String EMAIL_REGEX = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
    public static final String PASSWORD_REGEX = "^(?=.*[!@#$%^&*()-+=])(?=\\S+$).{8,}$";

    private Regex() {
        throw new UnsupportedOperationException("This is an utility class and cannot be instantiated");
    }
}
