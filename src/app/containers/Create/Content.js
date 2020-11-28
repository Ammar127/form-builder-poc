import React from 'react'
import styled from "styled-components";
const Main = styled.div`
  flex: 1 1 600px;
  overflow-y: auto;
`;
export const Content = () => {
    return (
      <Main>
        <p>Main</p>
      </Main>
    );
}
