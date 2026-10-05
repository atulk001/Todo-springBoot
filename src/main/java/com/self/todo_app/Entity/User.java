package com.self.todo_app.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.UUID)
    private UUID id;

    @Column(name="user_name" ,nullable=false, length = 200)
    private String name;

    @Column(name="user_email" ,nullable = false,length = 200,unique = true)
    private String email;

    @Column(name="user_password",nullable = false)
    private String password;

    @Column(name="created_at",updatable = false,nullable = false)
    private Instant createdAt;

    @Column(name="updated_at",nullable = false)
    private Instant updatedAt;

    @PrePersist
    void onCreate(){
        if(createdAt == null){
            createdAt = Instant.now();
        }
        updatedAt = Instant.now();

    }

}
