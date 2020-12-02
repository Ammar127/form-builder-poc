import React from "react";

import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { Field } from "../../elements/Field";
import { Download } from "@styled-icons/boxicons-regular/Download";
import { DragMove2 } from "@styled-icons/remix-fill/DragMove2";
import { AddToQueue } from "@styled-icons/boxicons-regular/AddToQueue";
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";
import { Trash } from "@styled-icons/boxicons-regular/Trash";
import {
  Label,
  Wrapper,
  IconSpan,
  MoveSpan,
  FieldContainer,
  Main,
  Header,
  Footer,
  Save,
  SaveSpan,
  OverLay,
  FirstDiv,
} from "../styled.js";

export const DnDElement = ({ e, index, ...props }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    drop: ({ elementName, elementType, isSpecsRequired }) =>
      props.onDrop({
        isSpecsRequired, 
        elementName,
        elementType,
        index: index + 1,
      }),

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return (
    <div ref={drop}>
      <Wrapper>
        {e && e.label && e.label !== "" && <Label>{e.label}</Label>}
        <FieldContainer>
          <MoveSpan>
            <IconSpan>
              {" "}
              <DragMove2 size={20} />{" "}
            </IconSpan>
            <IconSpan>
              {" "}
              <AddToQueue size={20} />
            </IconSpan>
            <IconSpan>
              {" "}
              <Pencil size={20} />
            </IconSpan>
            <IconSpan>
              {" "}
              <Trash size={20} />
            </IconSpan>
          </MoveSpan>
          <Field key={index} type={e.elementType} {...props}></Field>
        </FieldContainer>
      </Wrapper>
      {/* // over lay here */}
      {isOver && canDrop && <OverLay />}
      {/* // and set this to be draggable too // delete and update */}
    </div>
  );
};

export const FirstDrop = (props) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    drop: ({  isSpecsRequired, elementName, elementType }) =>
      props.onDrop({ isSpecsRequired,  elementName, elementType , index: 0}),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return <FirstDiv ref={drop}>{isOver && canDrop && <OverLay />}</FirstDiv>;
};

export const Content = (props) => {
  return (
    <Main>
      <Header>
        <h1>Drop & Create</h1>
      </Header>
      {/* add one here for 1st drop */}
      {/* // place a Overlay here with drop */}
      <FirstDrop {...props} />
      {props.form.map((e, index) => (
        <DnDElement
          key={"DnDElement" + index}
          e={e}
          index={index}
          {...props}
        ></DnDElement>
      ))}
      {/* //  add one more here */}

      <Footer>
        <Save onClick={props.onSave}>
          <Download size="25" /> <SaveSpan> Save</SaveSpan>
        </Save>
      </Footer>
    </Main>
  );
};
// move ref drop in the loop because  need to add inside the things
// add at the end and top of the loop to add (first and last)
// check on the save button
// validate  form
// save
