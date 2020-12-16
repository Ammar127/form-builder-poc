import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import {
  LOAD_FORMS,
  SET_FORM,
  SET_ACTIVE_FORM,
} from "../constants/actionTypes";
import {
  Nav,
  Ul,
  Li,
  RightNav,
  Container,
  ValidateButton,
  FormsSpan,
  HomeSpan,
  HomeLeftLi,
  HeadingUL,
} from "./styled";
  import { useHistory } from "react-router-dom";

import {dateGroup} from '../selector';
export const Home = (props) => {
  const history = useHistory();
  const subDates = (date) => {}
const [activeForm, setValue] = React.useState("");
 const onFormClick = (v) => {
   setValue(v);
 };
  const onCreateClick = () => {
history.push(`/create`);
  };
    return (
      <Container>
        <Nav>
          <Ul>
            <Li>
              <ValidateButton onClick={onCreateClick}>
                <Plus size="25" />
                Create
              </ValidateButton>
            </Li>
          </Ul>
          <FormsSpan>Forms</FormsSpan>
          <HeadingUL>
            {props.forms &&
              props.dateGroup.map((e, i) => (
                <HomeLeftLi onClick={() => onFormClick(e)} active={true}>
                  <HomeSpan>{e.label}</HomeSpan>
                </HomeLeftLi>
              ))}
          </HeadingUL>
        </Nav>
        <RightNav>
          <Ul>
            {props.subDates &&
              props.subDates.map((e) => (
                <Li>
                  <HomeSpan>{e.name}</HomeSpan>
                </Li>
              ))}
          </Ul>
        </RightNav>
      </Container>
    );
}


const mapStateToProps = ({ form }) => ({
  forms: form.forms,
  dateGroup: dateGroup(form),
});
const mapDispatchToProps = (dispatch) => ({
  onload: (forms) => dispatch({ type: LOAD_FORMS, forms }),
  onEdit: (form) => dispatch({ type: SET_FORM, form }),
  onSetActiveForm: (activeForm) => dispatch({type: SET_ACTIVE_FORM, activeForm})
});
export default connect(mapStateToProps, mapDispatchToProps)(Home)
