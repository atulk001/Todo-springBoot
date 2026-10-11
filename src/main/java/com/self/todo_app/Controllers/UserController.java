package com.self.todo_app.Controllers;

import com.self.todo_app.Entity.User;
import com.self.todo_app.Services.UserService;
import com.self.todo_app.dto.LoginRequest;
import com.self.todo_app.dto.LoginResponse;
import com.self.todo_app.dto.RegisterRequest;
import com.self.todo_app.dto.RegisterResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;


    @PostMapping("register")
    public ResponseEntity<RegisterResponse> registerUser(
            @Valid @RequestBody RegisterRequest request) {

        userService.registerUser(
                request.name(),
                request.email(),
                request.password()
        );

        RegisterResponse response =
                new RegisterResponse(request.email(), request.name());

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("login")
    public LoginResponse loginUser(@RequestBody LoginRequest request){

        return userService.loginUser(
                request.email(),
                request.password()
        );


    }




}
