import React from 'react'
import styled from 'styled-components';
const TextElement = styled.textarea`
  color: black;
  margin-top: 10px;
  width: 100%;
  border: 2px solid lightgray;
  border-radius: 4px;

`;
const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
`;
const Wrapper = styled.div`
  margin-top: 20px;
`;
export const Text = ({rows = 20}) => {
    return (
        <Wrapper>
            <Label>Text Label here</Label>
            <TextElement rows="rows"/>
        </Wrapper>
    )
}
