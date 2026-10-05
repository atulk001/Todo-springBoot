package com.self.todo_app.dto;

public record RegisterRequest(
        String name,
        String email,
        String password
) {
}
