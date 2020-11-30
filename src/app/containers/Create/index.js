import React from 'react'
import { connect } from 'react-redux'
import { ADD_FORM, UPDATE_FORM, DELETE_FORM, RESET_FORM } from "../../constants/actionTypes";

import {LeftNav} from './LeftNav';
import {Content} from './Content'
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 100%;
`;
export const Create = (props) => {
  const handleDrop = (index, item) => {
    // open modal here and take the specifications
    // add in array
    // save here in the location
    // also here check that new or update
    console.log("index, item => on Drop", index, item);
  };
  return (
      <Container>
        <LeftNav {...props} />
        <Content {...props} onDrop={handleDrop} />
      </Container>
  );
  
}

const mapStateToProps = ({ form }) => ({
  form: form.form,
});
const mapDispatchToProps = (dispatch) => ({
  onAdd: (index, obj) => dispatch({ type: ADD_FORM, index: index, obj: obj }),
  onUpdate: (index, obj) =>
    dispatch({ type: UPDATE_FORM, index: index, obj: obj }),
  onDelete: (index) => dispatch({ type: DELETE_FORM, index: index }),
  onReset: () => dispatch({ type: RESET_FORM }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Create);
