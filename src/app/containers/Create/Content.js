import React from 'react'
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Field } from '../../elements/Field';
import { Download } from "@styled-icons/boxicons-regular/Download";
const MoveSpan = styled.span`

background: lightgray;

position: absolute;
right: 0;
top: -10px;

`;
const FieldContainer = styled.div `
  position: relative;
`;
const Main = styled.div`
 
  overflow-y: auto;
  padding: 5px 100px;
  width: 100%;
  margin-left: 20%;
`;
const Header = styled.div`
  color: #c1c1c1;
  text-align: center;
`;
const Footer = styled.div`
  color: #c1c1c1;
  text-align: center;
`;
const Save = styled.button`
  border: none;
  border-radius: 25px;
  width: 200px;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  background-color: #027aff;
  box-shadow: 0 0 4px #65acfb;
  outline: none;
  background-position: center;
  transition: background 0.8s;
  margin-top: 5px;
  text-align: left;
  &:hover {
    background: #65acfb radial-gradient(circle, transparent 1%, #79b2f3 1%)
      center/15000%;
  }

  &:active {
    background-color: #65acfb;
    background-size: 100%;
    transition: background 0s;
  }
`;
const SaveSpan = styled.span`
  margin-left:30px;
`;
const OverLay = styled.hr`
  background: #027aff;
  height: 2px;
  border: none;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
`;
const FirstDiv = styled.div`
  padding: 5px;
`;

export const DnDElement = ({e, index, ...props}) => {
 const [{ canDrop, isOver }, drop] = useDrop({
   accept: ItemTypes.ELEMENT,
    drop: props.onDrop,
   

   collect: (monitor) => ({
     isOver: monitor.isOver(),
     canDrop: monitor.canDrop(),
   }),
 });
 return (
   <FieldContainer ref={drop}>

     {/* <MoveSpan>Hello</MoveSpan> */}
     <Field key={index} type={e} {...props}></Field>

     {/* // over lay here */}
     {isOver && canDrop && <OverLay />}
     {/* // and set this to be draggable too // delete and update */}
   </FieldContainer>
 );
}
export const FirstDrop = (props) => {
   const [{ canDrop, isOver }, drop] = useDrop({
   accept: ItemTypes.ELEMENT,
    drop: props.onDrop,
    collect: (monitor) => ({
     isOver: monitor.isOver(),
     canDrop: monitor.canDrop(),
   }),
 });
  return (
    <FirstDiv ref={drop}>
       {isOver && canDrop && <OverLay />}
    </FirstDiv>
  );
}
export const Content = (props) => {
 
  
    return (
      <Main >
        <Header>
          <h1>Drop & Create</h1>
        </Header>
        {/* add one here for 1st drop */}
        {/* // place a Overlay here with drop */}
      <FirstDrop {...props}/>
        {props.form.map((e, index) => (
          <DnDElement e={e} index={index} {...props}></DnDElement>
        ))}
        {/* //  add one more here */}

        <Footer>
          <Save>
            <Download size="25" /> <SaveSpan> Save</SaveSpan>
          </Save>
        </Footer>
      </Main>
    );
}
// move ref drop in the loop because  need to add inside the things
// add at the end and top of the loop to add (first and last)
// check on the save button
// validate  form
// save
