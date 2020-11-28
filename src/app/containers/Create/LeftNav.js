import React from 'react'
import styled from "styled-components";
const Nav = styled.div`
  background: #027aff;
  height: 100vh;
  display: flex;
  flex: 0 0 200px;
  flex-flow: column nowrap;
  text-align: center;
  z-index: 30;
  padding: 1rem 0 0 0;
  justify-content: flex-start;
  color: white;
`;
export const LeftNav = () => {
    return (
        <Nav>
        <p>Hello</p> 
        </Nav>
    )
}
