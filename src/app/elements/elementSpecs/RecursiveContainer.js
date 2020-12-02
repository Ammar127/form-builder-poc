import React  from "react";

const RecursiveContainer = ({ config, formik }) => {
  const builder = (individualConfig) => {
    switch (individualConfig.type) {
      case "text":
        return (
          <>
            <div>
              <label htmlFor={individualConfig.field}>
                {individualConfig.field}
              </label>
              <input
                type="text"
                name={individualConfig.field}
                onChange={formik.handleChange}
                style={{ ...individualConfig.style }}
              />
            </div>
          </>
        );
      case "number":
        return (
          <>
            <div>
              <label htmlFor={individualConfig.field}>
                {individualConfig.field}
              </label>
              <input
                type="number"
                name={individualConfig.field}
                onChange={formik.handleChange}
                style={{ ...individualConfig.style }}
              />
            </div>
          </>
        );
      case "checkbox":
        return (
          <>
            <div>
              <input
                type="checkbox"
                name={individualConfig.field}
                onChange={formik.handleChange}
                style={{ ...individualConfig.style }}
              />
              <label htmlFor={individualConfig.field}>
                {individualConfig.field}
              </label>
            </div>
          </>
        );
      default:
        return <div>Unsupported field</div>;
    }
  };

  return (
    <>
      {config.map((c, index) => {
        return builder(c);
      })}
    </>
  );
};

export default RecursiveContainer;
