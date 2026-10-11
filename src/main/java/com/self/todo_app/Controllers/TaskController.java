package com.self.todo_app.Controllers;

import com.self.todo_app.Entity.Task;
import com.self.todo_app.Services.TaskService;
import com.self.todo_app.dto.CreateTaskRequest;
import com.self.todo_app.dto.TaskResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/tasks")
@RequiredArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<TaskResponse> createTask(
            @Valid @RequestBody CreateTaskRequest request) {

        TaskResponse taskResponse = taskService.createTask(request);

        return ResponseEntity.status(HttpStatus.CREATED).body(taskResponse);
    }


}
