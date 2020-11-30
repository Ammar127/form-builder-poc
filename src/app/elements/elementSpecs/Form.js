import React from 'react'
import { useFormik } from "formik";
import response from "./Arr";
import RecursiveContainer from "./RecursiveContainer";
import * as yup from "yup";
export const Form = () => {
  const signupSchema = yup.object().shape({
    name: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: signupSchema,
  });
  // console.log(formik, response);
  return (
    <form onSubmit={formik.handleSubmit}>
      <RecursiveContainer config={response} formik={formik} />
      <button type="submit" disabled={!formik.isValid}>
        Submit
      </button>
    </form>
  );
};
