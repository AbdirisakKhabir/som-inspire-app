import React, { useState, useHistory } from "react";
import * as yup from "yup";
import Input from "./common/input";
import { renderButton } from "./common/input";

const Contact = ({ value, type, onChange, name, placeholder, onSubmit }) => {
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
    name: yup.string().required("Cannot be blank."),
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
    <div className="container-xxl mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="text-center">- Contact Us -</h1>
              <form onSubmit={handleSubmit}>
                <Input
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
                  value={formData.password}
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter your Full Name"
                  name="name"
                />
                {errors.password ? (
                  <div className="alert alert-danger">{errors.password}</div>
                ) : null}
                <div className="checkbox mx-3">
                  <textarea
                    className="form-control mb-2"
                    placeholder="Your Message"
                    rows="3"
                  ></textarea>
                </div>
                {/* Submit Buttons  */}
                <div className="d-grid mb-3">
                  {renderButton("Send", "submit", "btn btn-dark btn-lg")}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
