import { ADD_FORM, UPDATE_FORM, DELETE_FORM, RESET_FORM } from "../constants/actionTypes";


const initialState = {
  form: [1, 2, 3, 4, ],
  forms: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_FORM:
      
      // arr.splice(action.index, 0, action.obj);
      
      return {
       ...state,
       form: [...state.form, action.obj]
      };
    case UPDATE_FORM:
      let arr = state.form;
       
      arr.splice(action.index, 1, action.obj);
       
      return {
        ...state,
        form: arr,
      };
    case DELETE_FORM:
    let a = state.form;  
    a.splice(action.index, 1)
      return {
        ...state,
        form: a,
      };
    case RESET_FORM:
      return {
        ...state,
        form: [],
      };
      default:
      return state;
  }
};
