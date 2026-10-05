package com.self.todo_app.Services;

import com.self.todo_app.Entity.User;
import com.self.todo_app.Exceptions.EmailAlreadyRegisteredException;
import com.self.todo_app.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User registerUser(String username, String email, String password){

        Optional <User> existingUser = userRepository.findByEmail(email);

        if(existingUser.isPresent()){
            throw new EmailAlreadyRegisteredException("Email already registered");
        }

        User user = new User();

        user.setEmail(email);
        user.setName(username);
        user.setPassword(password);

        return userRepository.save(user) ;
    }

}
