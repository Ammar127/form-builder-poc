import React from 'react'
import { Wrapper, LeftMenu,Content , Button} from '../../components'
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {ItemTypes} from "./ItemTypes";
import { CheckBox, Divider, FileUploader, Input, Table, Text } from "../../elements";
import styled from "styled-components";

const ContentContainer = styled.div`
 
  padding: 50px 100px;
`;
// function selectBackgroundColor(isActive, canDrop) {
//   if (isActive) {
//     return "darkgreen";
//   } else if (canDrop) {
//     return "darkkhaki";
//   } else {
//     return "#222";
//   }
// }
const data = [
  { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
  { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
  { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
  { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
];

export const DroppedElement = ({type, ...props}) => {
  return (
    <>
       { type === 1 &&  <Table rows={data} /> }
      { type === 2 && <Input />}
       { type === 3 &&  <CheckBox /> }
       { type === 4 &&  <FileUploader></FileUploader> }
       { type === 5 &&  <Text /> }
       { type === 6 &&  <Divider /> }
    </>
  );
}
export let droppedElement = [];
export const DragContainer = ({ allowedDropEffect }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    drop: () => ({
      name: `${allowedDropEffect} Dustbin`,
      allowedDropEffect,
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  // const backgroundColor = selectBackgroundColor(isActive, canDrop);
  return (
    <ContentContainer
      ref={drop}
      // style={{  backgroundColor }}
    >
      {droppedElement.map((obj, index) => {
               return (
                 <>
                
                   <DroppedElement type={obj}></DroppedElement>
                 </>
               );
             })}
    </ContentContainer>
  );
};
export const DragElement =   ({name, type}) =>  {
 
    const [{ opacity }, drag] = useDrag({
      item: { type: ItemTypes.ELEMENT },
      end(item, monitor) {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          alert(name);
          droppedElement.push(type);
          console.log("droppedElement", droppedElement);
          // open modal here and take the specifications
          // add in array
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    });
     return (
       <Button ref={drag} style={{ opacity }}>
         {name}
       </Button>
     );
}
export default function Create() {
    return (
      <Wrapper>
        <DndProvider backend={HTML5Backend}>
          <LeftMenu>
            <div className="menu-container">
              <div className="main-nav-link">
                <Button>Validate</Button>
              </div>
              <h3>Cell Layout</h3>
              <ul className="myUl">
                <li>
                  <DragElement name="Table" type={1}>Table</DragElement>
                </li>
              </ul>
              <h3>Form Components</h3>

              <ul className="myUl">
                <li>
                  <DragElement name="Input" type={2}></DragElement>
                </li>
                <li>
                  <DragElement name="Checkbox" type={3}></DragElement>
                </li>
                <li>
                  <DragElement name="File uploader" type={4}></DragElement>
                </li>
                <li>
                  <DragElement name="Text" type={5}> </DragElement>
                </li>
                <li>
                  <DragElement name="Divider" type={6}></DragElement>
                </li>
              </ul>
            </div>
          </LeftMenu>
          <Content>
            <DragContainer allowedDropEffect="move"></DragContainer>
          </Content>
        </DndProvider>
      </Wrapper>
    );
}
