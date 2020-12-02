import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { LOAD_FORMS, SET_FORM } from "../constants/actionTypes";
import {Nav,
  Ul,
  Li,
   RightNav,
  Container,
  ValidateButton, FormsSpan} from './styled'
  import { useHistory } from "react-router-dom";
export const Home = (props) => {
  const history = useHistory();

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
          <Ul>{props.forms && props.forms.map((e) => <p>{e.name}</p>)}</Ul>
        </Nav>
        <RightNav>
          <Ul>{props.forms && props.forms.map((e) => <p>{e.name}</p>)}</Ul>
        </RightNav>
      </Container>
    );
}


const mapStateToProps = ({ form }) => ({
  forms: form.forms,
});
const mapDispatchToProps = (dispatch) => ({
  onload: (forms) => dispatch({ type: LOAD_FORMS, forms }),
  onEdit: (form) => dispatch({ type: SET_FORM, form }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home)
