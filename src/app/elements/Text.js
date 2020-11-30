import React from 'react'
import styled from 'styled-components';
const TextElement = styled.textarea`
  color: black;
  margin-top: 10px;
  width: 100%;
  border: 2px solid lightgray;
  border-radius: 4px;

`;

export const Text = ({rows = 20}) => {
    return (
     
            <TextElement rows="rows"/>
   
    )
}
