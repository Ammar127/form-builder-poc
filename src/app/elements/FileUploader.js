import React from 'react'
import styled from "styled-components";
import {Upload} from '@styled-icons/boxicons-regular/Upload';
const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  display: block;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Input = styled.input.attrs({ type: "file" })`
 display: none;
`;
const InputLabel = styled.label`
  border: 2px dashed lightgray;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 10px;
  padding: 12px 15px;
`;



export const FileUploader = ({label}) => {
    return (
      <Wrapper>
        <Label>file input label</Label>
        <InputLabel>
          <Input type="file" />
       <Upload   size={20}></Upload>   Choose File
        </InputLabel>
      </Wrapper>
    );
}
