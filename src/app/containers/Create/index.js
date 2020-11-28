import React from 'react'
import { connect } from 'react-redux'
import { ADD_FORM, UPDATE_FORM, DELETE_FORM, RESET_FORM } from "../../constants/actionTypes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <LeftNav {...props} />
        <Content {...props} />
      </Container>
    </DndProvider>
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
