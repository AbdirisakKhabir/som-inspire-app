import React, { useState } from "react";
import Input from "./common/input";
import { renderButton } from "./common/input";
import * as yup from "yup";

const RegisterForm = ({
  value,
  type,
  onChange,
  name,
  placeholder,
  onSubmit,
}) => {
  const initialData = {
    name: "",
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

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
    console.log(formData);
  };

  //yup schema with form validation
  let schema = yup.object().shape({
    name: yup.string().required("Cannot be balnk."),
    username: yup.string().email().required("Cannot be blank."),
    password: yup.string().required("Cannot be blank."),
  });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="text-center">Register Form</h1>
              <p className="fw-bold text-center">Access to our Dashboard</p>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Full Name"
                  value={formData.name}
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter your Full Name"
                  name="name"
                />
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
                {/* Register Buttons  */}
                <div className="d-grid gap-2 mb-3">
                  {renderButton("Register", "submit", "btn btn-success btn-lg")}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
