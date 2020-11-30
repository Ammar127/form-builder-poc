import React from 'react';
import styled from "styled-components";
 
const WrapperLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  display: block;
`;
const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function CheckBox({ label = "Helo here" }) {
  return (
    <Wrapper>
      
      <WrapperLabel>
        <input type="checkbox" />
        {label}
      </WrapperLabel>
    </Wrapper>
  );
}
