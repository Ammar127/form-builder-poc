import React from 'react'
import { connect } from "react-redux";
import {
  PreviewContainer,
  LeftContainer,
  LeftFooter,
  RightContainer,
  PreviewHeader,
  FormContainer,
  Values,
  Errors,
  Events,
  Submit,
  Title,
  PreviewCancel,
} from "./styled";
export const Preview = (props) => {
  return (
    <>
      <PreviewHeader>Preview</PreviewHeader>
      <PreviewContainer>
        <LeftContainer>
          <Title> Preview </Title>
          <FormContainer>
            inFormConatiner
            <ul>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </FormContainer>
          <LeftFooter>
            <Submit>Submit</Submit> <PreviewCancel>Cancel</PreviewCancel>
          </LeftFooter>
        </LeftContainer>
        <RightContainer>
          <Title> Data </Title>
          <Values>
            {" "}
            <ul>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </Values>
          <Title> Errors </Title>
          <Errors>
            {" "}
            <ul>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </Errors>
          <Title> Events </Title>
          <Events>
            {" "}
            <ul>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </Events>
        </RightContainer>
      </PreviewContainer>
    </>
  );
};
const mapStateToProps = ({ form }) => ({
  form: form.form,
});

export default connect(mapStateToProps, null)(Preview);
