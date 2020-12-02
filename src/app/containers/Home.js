import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LOAD_FORMS, SET_FORM } from "../constants/actionTypes";
export const Home = (props) => {
    
    console.log(props)
    return <div>{props.forms && props.forms.map(e=> <p>{e.name}</p>)}</div>;
}


const mapStateToProps = ({ form }) => ({
  forms: form.forms,
});
const mapDispatchToProps = (dispatch) => ({
  onload: (forms) => dispatch({ type: LOAD_FORMS, forms }),
  onEdit: (form) => dispatch({ type: SET_FORM, form }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home)
