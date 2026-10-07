package com.self.todo_app.Security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JWTService {


    @Value("${jwt.secret}")
    private String secretKey;
}
