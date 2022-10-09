import React from "react";

//renderButton function
export const renderButton = (label, type, className) => {
  return (
    <button type={type} className={className}>
      {label}
    </button>
  );
};

const Input = ({ value, type, onChange, name, placeholder, label }) => {
  return (
    <div className="form-group">
      <div className="mb-3 mx-3">
        <label className="mb-2 form-label">{label}</label>
        {/* Input elements */}
        <input
          name={name}
          value={value}
          type={type}
          className="form-control p-2"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
