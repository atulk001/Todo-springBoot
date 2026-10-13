package com.self.todo_app.Controllers;

import com.self.todo_app.Entity.Task;
import com.self.todo_app.Services.TaskService;
import com.self.todo_app.dto.ApiResponse;
import com.self.todo_app.dto.CreateTaskRequest;
import com.self.todo_app.dto.TaskResponse;
import com.self.todo_app.dto.UpdateTaskRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

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

    @GetMapping
    public ResponseEntity<List<TaskResponse>> fetchAllTasks() {

        List<TaskResponse> tasks = taskService.fetchAllTasks();

        return ResponseEntity.ok(tasks);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteTask(@PathVariable UUID id) {
        ApiResponse response = taskService.deleteTask(id);
        return ResponseEntity.ok(response);
    }

    


}
