package com.self.todo_app.dto;

import java.time.Instant;
import java.util.UUID;

public record TaskResponse(
        UUID id,
        String taskTitle,
        String taskDescription,
        String taskStatus,
        String taskPriority,
        Instant createdAt,
        Instant updatedAt
) {}