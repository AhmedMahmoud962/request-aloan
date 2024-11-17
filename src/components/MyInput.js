import React from "react";

function MyInput({ value, handleChange, inputName }) {
  return (
    <>
      <div className="form-group">
        <label>{inputName}</label>
        <input
          className="input-data"
          value={value}
          placeholder="Enter Your Phone Number"
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />
      </div>
    </>
  );
}

export default MyInput;
