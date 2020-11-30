import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
`;
const InputElement = styled.input`
  padding: .5rem;
  margin: 0.5rem 0;

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
    <Wrapper>
      <Label>Input label Label here</Label>
      <InputElement
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={props.onChange}
        onDrag={props.onDrag}
        onDrop={props.onDrop}
      />
    </Wrapper>
  );
}
