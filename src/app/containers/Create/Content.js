import React from 'react'
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Field } from '../../elements/Field';
import { Download } from "@styled-icons/boxicons-regular/Download";
import { DragMove2 } from "@styled-icons/remix-fill/DragMove2";
import {AddToQueue} from "@styled-icons/boxicons-regular/AddToQueue";
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { Trash } from "@styled-icons/boxicons-regular/Trash";
const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
  display: block;
`;
const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const IconSpan = styled.span`
  cursor: pointer;
  padding: 0 2px;
`;

const MoveSpan = styled.span`
  background: #f6f6f6;

  position: absolute;
  right: -20px;
  top: -15px;
  padding: 5px 10px;
  border-radius: 25px;
  border: 1px solid lightgrey;
  color: #717171;
`;
const FieldContainer = styled.div `
  position: relative;
`;
const Main = styled.div`
 
  overflow-y: auto;
  padding: 5px 100px;
  width: 100%;
  margin-left: 20%;
  z-index:999;
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
   <div ref={drop}>
     <Wrapper>
       <Label>Hello label here</Label>
       <FieldContainer>
         <MoveSpan>
          <IconSpan> <DragMove2 size={20} /> </IconSpan>
          <IconSpan> <AddToQueue size={20} /></IconSpan>
          <IconSpan> <Pencil size={20} /></IconSpan>
          <IconSpan> <Trash size={20} /></IconSpan>
         </MoveSpan>
         <Field key={index} type={e} {...props}></Field>
       </FieldContainer>
     </Wrapper>
     {/* // over lay here */}
     {isOver && canDrop && <OverLay />}
     {/* // and set this to be draggable too // delete and update */}
   </div>
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
