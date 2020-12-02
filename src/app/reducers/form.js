import {
  ADD_FORM,
  UPDATE_FORM,
  DELETE_FORM,
  RESET_FORM,
  LOAD_FORMS,
  SET_FORM,
} from "../constants/actionTypes";


const initialState = {
  form: [],
  forms: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_FORM:
       const newState = state.form.slice();
      newState.splice(action.index, 0, action.obj);
      return {
        ...state,
        form: [...newState],
      };
    case UPDATE_FORM:
       
      
       
      return {
        ...state,
        form: state.form.map((e, index) => index === action.index ? action.obj : e ),
      };
    case DELETE_FORM:
     
      return {
        ...state,
        form: state.form.filter((e, index) => index === action.index ? false : true),      
      };
    case RESET_FORM:
      return {
        ...state,
        form: [],
      };
    case LOAD_FORMS:
      return {
        ...state,
        forms: action.forms
      }
    case SET_FORM:
      return{
        ...state,
        form: action.form
      }
      default:
      return state;
  }
};
