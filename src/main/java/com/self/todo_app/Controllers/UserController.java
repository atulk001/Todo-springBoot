package com.self.todo_app.Controllers;

import com.self.todo_app.Entity.User;
import com.self.todo_app.Services.UserService;
import com.self.todo_app.dto.RegisterRequest;
import com.self.todo_app.dto.RegisterResponse;
import lombok.RequiredArgsConstructor;
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
    public RegisterResponse registerUser(@RequestBody RegisterRequest request){
         userService.registerUser(
                request.name(),
                request.email(),
                request.password()
        );

        return new RegisterResponse(request.email(), request.name());
    }




}
