
import { createSelector } from "reselect";
import moment from 'moment'
const formsSelector = (form) => (form ? form.forms : []);
const activeFormSelector = (form) => (form ? form.activeForm : {});
const distinct = (a) => a.filter((item, i, ar) => ar.indexOf(item) === i);
const convertDateFormat = (d) => new Date(d).toISOString().replace("-", "/").split("T")[0].replace("-", "/");
export const dateGroup = createSelector([formsSelector], (forms) => {
    let dates = distinct(forms.map((e) => convertDateFormat(e.createdAt)));

    // here get dates by format 
    // then get distinct dates 
    // then map todays date

    
  return dates.map(e=> {
      return {
        label:  e === convertDateFormat(Date.now()) ? "Today" : moment(e).format("dddd DD MMM"), // "DateFomat",
        date: e,
      };
  });
});

export const subDates = createSelector(
  [formsSelector, activeFormSelector],
  (forms, activeForm) => {
    console.log(forms, activeForm);
    return [];
  }
);

