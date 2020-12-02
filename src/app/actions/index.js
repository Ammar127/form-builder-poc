import {LOAD_FORMS, 
RESET_FORM} from "../constants/actionTypes";
import agent from "../../agent";



export const getAllForms = () => (dispatch) => {
  agent.Form.getAll().then(({form}) => {
    dispatch({
      type: LOAD_FORMS,
      forms: form,
    });
  });
};
 
export const SaveForm = (form) => (dispatch) => {
  console.log("inaction", form);
     agent.Form.post(form)
       .then((res) => {
         dispatch({
           type: RESET_FORM,
         });
       })
       .catch((err) => {
         console.log('err', err)
         // Process error code
       });
          
};


