import {LOAD_FORMS, 
RESET_FORM} from "../constants/actionTypes";

export const getAllForms = () => (dispatch) => {
    agent.Form.getAll().then((res) => {
     dispatch({
       type: LOAD_FORMS,
       res,
     });
    });
  
};
export const SaveForm = () => (dispatch, form) => {
     agent.Form.post(form).then((res) => {
      dispatch({
        type: RESET_FORM,
      });
      history.push("/home");
     });
};

 
