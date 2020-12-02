import React from 'react'
import { connect } from "react-redux";
import {
  PreviewContainer,
  LeftContainer,
  RightContainer,
  PreviewHeader,
  FormContainer,
  Values,
Errors,
Events,
} from "./styled";
export const Preview = (props) => {
  return (
    <>
      <PreviewHeader>Preview</PreviewHeader>
      <PreviewContainer>
        <LeftContainer>
          in Left
          <FormContainer>inFormConatiner</FormContainer>
        </LeftContainer>
        <RightContainer>in right 
          <Values> in Values</Values>
         <Errors> in Errors</Errors>
         <Events> in Events</Events>
        </RightContainer>
      </PreviewContainer>
    </>
  );
};
const mapStateToProps = ({ form }) => ({
  form: form.form,
});

export default connect(mapStateToProps, null)(Preview);
