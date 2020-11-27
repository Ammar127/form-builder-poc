import React from 'react'
import { Wrapper, LeftMenu,Content , Button} from '../../components'
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {ItemTypes} from "./ItemTypes";
function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
    return "darkgreen";
  } else if (canDrop) {
    return "darkkhaki";
  } else {
    return "#222";
  }
}
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
  const backgroundColor = selectBackgroundColor(isActive, canDrop);
  return (
    <div
      ref={drop}
      style={{ height: "100%", width: "100%", backgroundColor }}
    >
      {`Works with ${allowedDropEffect} drop effect`}
      <br />
      <br />
      {isActive ? "Release to drop" : "Drag a box here"}
    </div>
  );
};
export const DragElement =   ({name}) =>  {
 
    const [{ opacity }, drag] = useDrag({
      item: { type: ItemTypes.ELEMENT },
      end(item, monitor) {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          alert(name);
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
                  <DragElement name="Table">Table</DragElement>
                </li>
              </ul>
              <h3>Form Components</h3>

              <ul className="myUl">
                <li>
                  <DragElement name="Input"></DragElement>
                </li>
                <li>
                  <DragElement name="Checkbox"></DragElement>
                </li>
                <li>
                  <DragElement name="File uploader"></DragElement>
                </li>
                <li>
                  <DragElement name="Text"> </DragElement>
                </li>
                <li>
                  <DragElement name="Divider"></DragElement>
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
