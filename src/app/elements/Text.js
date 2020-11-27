import React from 'react'
import styled from 'styled-components';
const TextElement = styled.textarea`
color: black;
margin-top:20px;
width: 100%;
`;
export const Text = ({rows = 20}) => {
    return (
     <TextElement rows="rows"/>
    )
}
