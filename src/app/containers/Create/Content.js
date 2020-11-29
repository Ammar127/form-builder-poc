import React from 'react'
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Field } from '../../elements/Field';
const Main = styled.div`
  flex: 1 1 600px;
  overflow-y: auto;
  padding: 5px 100px;
`;
const Header = styled.div`
  color: #c1c1c1;
  text-align: center;
`;
export const Content = (props) => {
   console.log(props.form);

   const [{ canDrop, isOver }, drop] = useDrop({
     accept: ItemTypes.ELEMENT,
     drop: () => ({
       name: `  Dustbin`,
     }),
     collect: (monitor) => ({
       isOver: monitor.isOver(),
       canDrop: monitor.canDrop(),
     }),
   });
   const isActive = canDrop && isOver;
    return (
      <Main ref={drop}>
        <Header>
          <h1>Drop & Create</h1>
        </Header>
        {props.form.map((e, index) => <Field key={index} type={e} {...props} ></Field>)}
      </Main>
    );
}
