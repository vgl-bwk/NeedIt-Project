import React, { useState } from "react";
import "./loginForm.css";

function Login() {
  const [emailReg, setEmailReg] = useState("");

  const [passwordReg, setpasswordReg] = useState("");

  const Register = (e) => {
    console.log("form is executed");
    e.preventDefault();

    fetch("http://localhost:5000/users", {
      method: "GET",
      body: JSON.stringify({
        email: emailReg,

        password: passwordReg,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="loginform">
      <form className="loginmember" onSubmit={Register}>
        <h1>Member Login</h1>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        ></input>

        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => {
            setpasswordReg(e.target.value);
          }}
        ></input>

        <button type="submit">Login</button>

        <a href="/Register">Not member yet? signup here</a>
      </form>
    </div>
  );
}

export default Login;
