package com.self.todo_app.dto;

import com.self.todo_app.Enums.TaskPriority;
import com.self.todo_app.Enums.TaskStatus;

import java.time.Instant;
import java.util.UUID;

public record TaskResponse(
        UUID id,
        String taskTitle,
        String taskDescription,
        TaskStatus taskStatus,
        TaskPriority taskPriority,
        Instant createdAt,
        Instant updatedAt
) {}