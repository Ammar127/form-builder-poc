import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  padding: .5rem;
  

  font-family: inherit;
  width: 98%;
  border: 2px solid lightgray;
  border-radius: 4px;
  &:focus {
    border: 2px solid lightgray;
    outline: none;
  }
`;

export const Input = ({   label="Input Label",
        name="inp",
        type="text",
        placeholder="text input", ...props }) => {
  return (
  
      <InputElement
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={props.onChange}
        onDrag={props.onDrag}
        onDrop={props.onDrop}
      />
 
  );
}
