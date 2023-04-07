
import axios from "axios";
import React, { Component, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { login } from "./userService";

export const LoginTest = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


 

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    var obj = {
      username,
      password,
    };
    axios.post('https://localhost:7255/api/Users/login',obj).then((res) => {
      if (res.data) {
        alert("/dashboard");
      } else {
        alert("Kredencialet e gabuara");
        return;
      }
    });
    // if (email == users.email && password == users.password) {
    //   dispatch(saveUser(users));
    //   navigate("/dashboard");
    // }
  }
  return (
    <Container className="mt-5 mb-5 col-lg-3 col-sm-12">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="sm" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          size="lg"
          type="submit"
          disabled={!validateForm()}
          className="m-auto"
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};
