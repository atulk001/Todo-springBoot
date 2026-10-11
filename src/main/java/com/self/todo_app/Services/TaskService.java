package com.self.todo_app.Services;

import com.self.todo_app.Entity.Task;
import com.self.todo_app.Entity.User;
import com.self.todo_app.Enums.TaskPriority;
import com.self.todo_app.Enums.TaskStatus;
import com.self.todo_app.Repositories.TaskRepository;
import com.self.todo_app.Repositories.UserRepository;
import com.self.todo_app.dto.CreateTaskRequest;
import com.self.todo_app.dto.TaskResponse;
import lombok.*;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Getter
@Setter
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskResponse createTask(CreateTaskRequest request){

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if(authentication == null || !authentication.isAuthenticated() ||
        authentication instanceof AnonymousAuthenticationToken
        ){
            throw new AccessDeniedException("You are not authorized to perform this action.");
        }

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));


        Task task = new Task();

        task.setTitle(request.title());
        task.setDescription(request.description());

        task.setStatus(
                request.taskStatus() != null
                        ? request.taskStatus()
                        : TaskStatus.PENDING
        );

        task.setPriority(
                request.taskPriority() != null
                        ? request.taskPriority()
                        : TaskPriority.MEDIUM
        );
        task.setUser(user);
        Task savedTask=taskRepository.save(task);

        return new TaskResponse(
                savedTask.getId(),
                savedTask.getTitle(),
                savedTask.getDescription(),
                savedTask.getStatus(),
                savedTask.getPriority(),
                savedTask.getCreatedAt(),
                savedTask.getUpdatedAt()
        );

    }

    public List<TaskResponse> fetchAllTasks(){

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if(authentication == null || !authentication.isAuthenticated() ||
                authentication instanceof AnonymousAuthenticationToken
        ){
            throw new AccessDeniedException("You are not authorized to perform this action.");
        }

        String email = authentication.getName();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Task> tasks = taskRepository.findByUserId(user.getId());

        List<TaskResponse> responses = tasks.stream()
                .map(task -> new TaskResponse(
                        task.getId(),
                        task.getTitle(),
                        task.getDescription(),
                        task.getStatus(),
                        task.getPriority(),
                        task.getCreatedAt(),
                        task.getUpdatedAt()
                ))
                .toList();
        return responses;



    }


}
