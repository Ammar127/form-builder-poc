import React from 'react'
import styled from "styled-components";
const Input = styled.input`
 
`;
const Label = styled.label`
  padding: 0;
  margin-top: 20px;
`;


export const FileUploader = ({label}) => {
    return (
      <Label>
        <Input type="file" />
        {label}
      </Label>
    );
}
