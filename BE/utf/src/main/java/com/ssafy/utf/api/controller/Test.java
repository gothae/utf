package com.ssafy.utf.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {

    @GetMapping("/hello")
    public String test() {
        return "Hello World";
    }
}
