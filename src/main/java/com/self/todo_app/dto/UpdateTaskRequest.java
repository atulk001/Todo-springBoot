package com.self.todo_app.dto;

import com.self.todo_app.Enums.TaskPriority;
import com.self.todo_app.Enums.TaskStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UpdateTaskRequest(

        String title,


        String description,

        TaskPriority taskPriority,

        TaskStatus taskStatus
) {
}
