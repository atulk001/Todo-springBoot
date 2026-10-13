package com.self.todo_app.dto;

import com.self.todo_app.Enums.TaskPriority;
import com.self.todo_app.Enums.TaskStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CreateTaskRequest(

        @NotBlank(message = "Title cannot be Blank")
        @Size(max = 200)
        String title,

        @Size(max= 1000)
        String description,

        TaskPriority taskPriority,

        TaskStatus taskStatus




) {
}
