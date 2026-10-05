package com.self.todo_app.Repositories;

import com.self.todo_app.Entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface taskRepository extends JpaRepository<Task, UUID> {
}
