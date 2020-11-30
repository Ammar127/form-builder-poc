import React from 'react'
import styled from "styled-components";
import {  useDrag } from "react-dnd";
import { DragMove2 } from "@styled-icons/remix-fill/DragMove2";
import { Refresh } from "@styled-icons/boxicons-regular/Refresh";
import { ItemTypes } from "./ItemTypes";
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
  position: fixed;
  width: 20%;
`;
const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const Li = styled.li`
  padding: 5px 25px;
`;
const DashedButton = styled.button`
  border: dashed 0.5px;
  border-radius: 25px;
  width: 100%;
  padding: 12px 15px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: transparent;
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
const ValidateButton = styled.button`
  border: none;
  border-radius: 25px;
  width: 100%;
  padding: 12px 15px;
  font-size: 20px;
  cursor: pointer;
  color: #027aff;
  background-color: white;
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

export const DragElement = ({name, type, ...props}) => {
  const [{ opacity }, drag] = useDrag({
    item: { name:name, props:props, type: ItemTypes.ELEMENT },
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        // alert(name);
        props.onAdd(1, type);
       
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });
  return (
    <DashedButton ref={drag} style={{ opacity }}>
      <DragMove2 size="20" /> {name}
    </DashedButton>
  );
}

export const LeftNav = (props) => {
    return (
      <Nav>
        <Ul>
          <Li><ValidateButton>
          <Refresh size="25" />
          Validate
        </ValidateButton></Li>
        </Ul>
        
        <h3>Cell Layout</h3>
        <Ul>
          <Li>
            <DragElement {...props} type={1} name="Table"></DragElement>
          </Li>
        </Ul>
        <h3>Form Components</h3>
        <Ul>
          <Li>
            <DragElement {...props} type={2} name="Input"></DragElement>
          </Li>
          <Li>
            <DragElement {...props} type={3} name="Checkbox"></DragElement>
          </Li>
          <Li>
            <DragElement {...props} type={4} name="File uploader"></DragElement>
          </Li>
          <Li>
            <DragElement {...props} type={5} name="Text"></DragElement>
          </Li>
          <Li>
            <DragElement {...props} type={6} name="Divider"></DragElement>
          </Li>
          <Li></Li>
        </Ul>
      </Nav>
    );
}
// add in the list via props
// (create an object for the elements and open modal receive the things and add into the state so we can save this )
