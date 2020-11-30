import React from 'react';
import styled from "styled-components";
 
const WrapperLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  display: block;
`;


export default function CheckBox({ label = "Helo here" }) {
  return (
  
      <WrapperLabel>
        <input type="checkbox" />
        {label}
      </WrapperLabel>
 
  );
}
