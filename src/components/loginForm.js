import React, { useState, useHistory } from "react";
import * as yup from "yup";
import Input from "./common/input";
import { renderButton } from "./common/input";

const LoginForm = ({ value, type, onChange, name, placeholder, onSubmit }) => {
  // const history = useHistory();
  const initialData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

  //schema
  let schema = yup.object().shape({
    username: yup.string().email().required("Cannot be blank."),
    password: yup.string().required("Cannot be blank."),
  });
  //validate the input changes before the
  const handleValidationChange = (event) => {
    yup
      .reach(schema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({ ...errors, [event.target.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [event.target.name]: err.errors[0] });
      });
  };
  //handleChange function
  const handleChange = (event) => {
    const loginData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    handleValidationChange(event);
    setFormData(loginData);
  };
  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push("/layout");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="text-center">Login</h1>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Email Address"
                  value={formData.username}
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter your Username"
                  name="username"
                />
                {errors.username ? (
                  <div className="alert alert-danger">{errors.username}</div>
                ) : null}
                <Input
                  label="Password"
                  value={formData.password}
                  type="password"
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  name="password"
                />
                {errors.password ? (
                  <div className="alert alert-danger">{errors.password}</div>
                ) : null}
                <div className="checkbox mx-3">
                  <label>
                    <input
                      type="checkbox"
                      name="remember"
                      className="mb-3 mx-1"
                    />
                    Remember Me
                  </label>
                </div>
                {/* Submit Buttons  */}
                <div className="d-grid gap-2 mb-3">
                  {renderButton("Login", "submit", "btn btn-dark btn-lg")}
                  {renderButton("Forgot Password", "button", "btn btn-link")}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
