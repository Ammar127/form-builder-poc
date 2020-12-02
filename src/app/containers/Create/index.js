import React, { useState } from "react";
import { connect } from 'react-redux'
import { ADD_FORM, UPDATE_FORM, DELETE_FORM, RESET_FORM } from "../../constants/actionTypes";
import { useHistory } from "react-router-dom";
import {LeftNav} from './LeftNav';
import {Content} from './Content'
import {
  Container,
} from "../styled.js";
import {ElementSpecs} from '../../elements/elementSpecs'
import { SaveForm } from "../../actions";
export const Create = (props) => {
  const history = useHistory();
  const handleDrop = ({isSpecsRequired,  elementName, elementType, index , isEdit = false}) => {
    console.log("in handle drop", {
      elementName,
      elementType,
      isEdit,
      index,
    });
    if (isSpecsRequired) {
      SetItem({ elementName, elementType, isEdit, index });
      toggle(true);
    } else {
      props.onAdd(index, { elementName, elementType });
    }
    // here we have the type, isEdit , index
  };
  const [isOpen, toggle] = useState(false);
  const [modalItem, SetItem] = useState({});

  const  handlOpenModal = (open) =>  {
    console.log("close modal");
    toggle(open);
  }
  const handleSave = (item) => {
    // here save in the array
    // it should { elementName, elementType , ...formValues}
    console.log('item', item)
    props.onAdd(item.index, item);
    toggle(false);

  };

  return (
    <Container>
      <LeftNav
        {...props}
        onValidateClick={() => {
          history.push(`/preview`);
        }}
      />
      <Content
        {...props}
        onDrop={handleDrop}
        onCancel={()=> {history.push(`/home`);}}
        onSave={() => {
          props.onSave(props.form);
          history.push(`/home`);
        }}
      />
      {isOpen && (
        <ElementSpecs
          item={modalItem}
          onModalClose={(open) => handlOpenModal(open)}
          onSave={(item) => handleSave(item)}
          isOpen={isOpen}
        />
      )}
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
  onSave: (form) => dispatch(SaveForm(form)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Create);
