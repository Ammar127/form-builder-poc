import React from 'react';
import styled from "styled-components";
const Label = styled.label`
  padding: 0;
  margin-top: 20px;
`;

export default function CheckBox({ label = "Helo here" }) {
  return (
    <Label>
      <input type="checkbox" />
      {label}
    </Label>
  );
}
