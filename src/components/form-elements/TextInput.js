import React from "react";

const TextInput = ({ label, type, placeholder, value, onChange }) => {
  type = type ? type : 'text';
  return (
    <div className="mt-3">
      <label htmlFor="email" className="form-label">
        {label}
      </label>
      <input type={type} value={value} onChange={(e)=>onChange(e)} required className="form-control" placeholder={placeholder} />
    </div>
  );
};
export default TextInput;
