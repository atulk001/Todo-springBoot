package com.self.todo_app.Exceptions;

public class EmailAlreadyRegisteredException extends RuntimeException{

    public EmailAlreadyRegisteredException(String message){
        super(message);

    }
}
