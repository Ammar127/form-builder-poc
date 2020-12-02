import React from 'react'
import { useFormik } from "formik";
import { Arr, Validations } from "./Arr";
import RecursiveContainer from "./RecursiveContainer";
import * as yup from "yup";
export const Form = (props) => {
  const { elementName, elementType, values, index } = props.item;
  const formArray = Arr(elementType);
  
  const yupSchema = yup.object(Validations(elementType));

  const formik = useFormik({
    initialValues: values || {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      props.onSave({index, elementName, elementType, ...values });
    },
    validationSchema: yupSchema,
  });
  // console.log(formik, response);
  return (
    <form onSubmit={formik.handleSubmit}>
      <RecursiveContainer config={formArray} formik={formik} />
      <button type="submit" disabled={!formik.isValid}>
        Submit
      </button>
    </form>
  );
};
