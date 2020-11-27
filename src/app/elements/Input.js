import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  
  
  padding: 1rem;
  margin: 0.5rem 0;
  
  font-family: inherit;
  font-size: 1.1rem;
  width: 100%;
border-radius: 15px;

`;
export const Input = ({ label, name, type ,placeholder, ...props }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <InputElement
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={props.onChange}
        onDrag={props.onDrag}
        onDrop={props.onDrop}
      />
    </div>
  );
}
