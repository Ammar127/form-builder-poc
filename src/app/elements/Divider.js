import React from "react";
import styled from "styled-components";
const Hr = styled.hr`
  background: lightgray;
  height: 1px;
  border: none;
  margin-top: 10px;
`;
const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
`;
const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;


export const Divider =() =>  {
    return (
      <Wrapper>
        <Label>Hello label here</Label>
        <Hr></Hr>
      </Wrapper>
    )
}
