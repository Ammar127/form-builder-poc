import React from 'react'
import { connect } from "react-redux";

export const Preview = (props) => {
  return (
    <div>
      <p>preview</p>
    </div>
  );
};
const mapStateToProps = ({ form }) => ({
  form: form.form,
});

export default connect(mapStateToProps, null)(Preview);
