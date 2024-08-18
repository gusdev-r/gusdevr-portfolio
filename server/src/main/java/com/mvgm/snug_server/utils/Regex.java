package com.mvgm.snug_server.utils;

public class Regex {
    public static final String EMAIL_REGEX = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
    public static final String PASSWORD_REGEX = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,}$";

    private Regex() {
        throw new UnsupportedOperationException("This is an utility class and cannot be instantiated");
    }
}
