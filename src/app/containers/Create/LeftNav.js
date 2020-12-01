import React from 'react'
import styled from "styled-components";
import {  useDrag } from "react-dnd";
import { DragMove2 } from "@styled-icons/remix-fill/DragMove2";
import { Refresh } from "@styled-icons/boxicons-regular/Refresh";
import { ItemTypes } from "./ItemTypes";
import {
 
  Nav,
  Ul,
  Li,
  DashedButton,
  ValidateButton,

} from "./styled.js";
export const DragElement = ({ name, isSpecsRequired, type, ...props }) => {
  const [{ opacity }, drag] = useDrag({
    item: {
      elementName: name,
      elementType: type,
      isSpecsRequired,
      type: ItemTypes.ELEMENT,
    },
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      // if (item && dropResult) {
      //   // alert(name);
      //   props.onAdd(1, type);

      // }
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
};

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
            <DragElement {...props} type={1}  isSpecsRequired={true} name="Table"></DragElement>
          </Li>
        </Ul>
        <h3>Form Components</h3>
        <Ul>
          <Li>
            <DragElement {...props} type={2} isSpecsRequired={true} name="Input"></DragElement>
          </Li>
          <Li>
            <DragElement {...props} type={3} isSpecsRequired={true} name="Checkbox"></DragElement>
          </Li>
          <Li>
            <DragElement {...props} type={4} isSpecsRequired={true} name="File uploader"></DragElement>
          </Li>
          <Li>
            <DragElement {...props} type={5} isSpecsRequired={true} name="Text"></DragElement>
          </Li>
          <Li>
            <DragElement {...props} type={6} isSpecsRequired={false} name="Divider"></DragElement>
          </Li>
          <Li></Li>
        </Ul>
      </Nav>
    );
}
// add in the list via props
// (create an object for the elements and open modal receive the things and add into the state so we can save this )
