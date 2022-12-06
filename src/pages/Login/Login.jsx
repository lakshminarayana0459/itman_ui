import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  let onSubmithandler = (e) => {
    e.preventDefault();
    console.log("login", formData);
  };

  let changehandler = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div id="loginform">
      <form onSubmit={onSubmithandler}>
        <FormHeader title="Login" />
        <div class="row">
          <label>user name</label>
          <input
            type="text"
            placeholder="Enter User Name"
            name="username"
            value={formData.username}
            onChange={changehandler}
          />
        </div>
        <div class="row">
          <label>password</label>
          <input
            type="password"
            placeholder="Enter Password here"
            name="password"
            value={formData.password}
            onChange={changehandler}
          />
        </div>
        <div id="button" class="row">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
export default Login;
