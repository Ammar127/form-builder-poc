import React from 'react'
import { useFormik } from "formik";
import { Arr, Validations } from "./Arr";
import RecursiveContainer from "./RecursiveContainer";
import * as yup from "yup";
export const Form = ({ item: { elementType, values = {}}}) => {
  const formArray = Arr(elementType);
  console.log("formArray", formArray);
  const yupSchema = yup.object(Validations(elementType));

  const formik = useFormik({
    initialValues: values,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
