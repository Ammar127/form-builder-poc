import React from 'react'
import styled from "styled-components";
import {Upload} from '@styled-icons/boxicons-regular/Upload';

const Input = styled.input.attrs({ type: "file" })`
 display: none;
`;
const InputLabel = styled.label`
  border: 2px dashed lightgray;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 12px 15px;
  display: block;
  width: 150px;
`;



export const FileUploader = ({label}) => {
    return (
   
        <InputLabel>
          <Input type="file" />
       <Upload   size={20}></Upload>   Choose File
        </InputLabel>
   
    );
}
