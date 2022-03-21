import React, { useState } from "react";

const Password = ({label, onChange}) => {
  const [visibility, setVisibility] = useState(false);
  const config = visibility
    ? { type: "text", icon: "fill" }
    : { type: "password", icon: "slash-fill" };
  const toggleVisibility = (event) => {
    event.preventDefault();
    setVisibility(!visibility);
  };
  return (
    <div className="mt-3">
      <label htmlFor="password" className="form-label">
        {label ?  label : 'Password'}
      </label>
      <div className="input-group">
        <input type={config.type} required className="form-control" placeholder="Example@123" onChange={onChange} />
        <button
          onClick={(e) => toggleVisibility(e)}
          className="input-group-text"
        >
          <i className={`bi bi-eye-${config.icon}`}></i>
        </button>
      </div>
    </div>
  );
};

export default Password;
