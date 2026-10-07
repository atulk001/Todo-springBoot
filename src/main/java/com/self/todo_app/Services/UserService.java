package com.self.todo_app.Services;

import com.self.todo_app.Entity.User;
import com.self.todo_app.Exceptions.EmailAlreadyRegisteredException;
import com.self.todo_app.Exceptions.InvalidCredentialException;
import com.self.todo_app.Repositories.UserRepository;
import com.self.todo_app.Security.JWTService;
import com.self.todo_app.dto.LoginResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;

    public User registerUser(String username, String email, String password){

        Optional <User> existingUser = userRepository.findByEmail(email);

        if(existingUser.isPresent()){
            throw new EmailAlreadyRegisteredException("Email already registered");
        }

        User user = new User();

        user.setEmail(email);
        user.setName(username);
        user.setPassword(passwordEncoder.encode(password));

        return userRepository.save(user) ;
    }

    public LoginResponse loginUser(String email, String password){
        Optional <User> existingUser = userRepository.findByEmail(email);

        if(existingUser.isEmpty()){
            throw new InvalidCredentialException("User not found");

        }

        User user = existingUser.get();

        boolean passwordMatch= passwordEncoder.matches(password, user.getPassword());

        if(!passwordMatch){
            throw new InvalidCredentialException("Wrong password");
        }

        String token = jwtService.generateToken(email);

        return new LoginResponse(token);



    }

}
