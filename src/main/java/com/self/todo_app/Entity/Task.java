package com.self.todo_app.Entity;

import com.self.todo_app.Enums.TaskPriority;
import com.self.todo_app.Enums.TaskStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="tasks")
public class Task {


    @ManyToOne(fetch=FetchType.LAZY,optional = false)
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name="task_title", nullable=false)
    private String title;

    @Column(name="task_description" ,length = 1000)
    private String description;

    @Column(name="created_at",nullable = false,updatable = false)
    private Instant createdAt;

    @Column(name = "updated_at",nullable = false)
    private Instant updatedAt;

    @Enumerated(EnumType.STRING)
    @Column(name="task_status" )
    private TaskStatus status;

    @Enumerated(EnumType.STRING)
    @Column(name="task_priority" )
    private TaskPriority priority;

    @PrePersist
    void onCreate() {
        if (createdAt == null) {
            createdAt = Instant.now();
            updatedAt = Instant.now();
        }
    }

    @PreUpdate
    void onUpdate() {
        updatedAt = Instant.now();
    }


}
