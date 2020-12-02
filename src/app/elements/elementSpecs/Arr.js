import * as yup from "yup";

const specsFormTypes = [
  {
    type: 1,
    form: [
      {
        type: "text",
        field: "label",
        isRequired: true,
      },
      {
        type: "number",
        field: "rows",
        isRequired: true,
      },
      {
        type: "number",
        field: "cols",
        isRequired: true,
      },
    ],
  }, //  above is  for table
  {
    type: 2,
    form: [
      {
        type: "text",
        field: "label",
        isRequired: true,
      },
      {
        type: "text",
        field: "name",
        isRequired: true,
      },
      {
        type: "text",
        field: "value",
        isRequired: false,
      },
      {
        type: "text",
        field: "placeholder",
        isRequired: false,
      },
      {
        type: "checkbox",
        field: "isRequired",
        isRequired: false,
      },
      {
        type: "checkbox",
        field: "readOnly",
        isRequired: false,
      },
      {
        type: "number",
        field: "min",
        isRequired: false,
      },
      {
        type: "number",
        field: "max",
        isRequired: false,
      },
    ],
  }, //  above is  for input
  {
    type: 3,
    form: [
      {
        type: "text",
        field: "label",
        isRequired: true,
      },
      {
        type: "text",
        field: "name",
        isRequired: true,
      },
      // {
      //   type: "text",
      //   field: "value",
      //   isRequired: true,
      // },
      {
        type: "checkbox",
        field: "isRequired",
        isRequired: false,
      },
    ],
  }, //  above is  fot checkbox
  {
    type: 4,
    form: [
      {
        type: "text",
        field: "label",
        isRequired: true,
      },
      {
        type: "text",
        field: "name",
        isRequired: true,
      },

      {
        type: "checkbox",
        field: "isRequired",
        isRequired: false,
      },
      {
        type: "checkbox",
        field: "isMultiple",
        isRequired: false,
      },
    ],
  }, //  above is  for fileuplaoder
  {
    type: 5,
    form: [
      {
        type: "text",
        field: "label",
        isRequired: true,
      },
      {
        type: "text",
        field: "name",
        isRequired: true,
      },
      {
        type: "text",
        field: "value",
        isRequired: false,
      },
      {
        type: "text",
        field: "placeholder",
        isRequired: false,
      },
      {
        type: "checkbox",
        field: "isRequired",
        isRequired: false,
      },
      {
        type: "number",
        field: "rows",
        isRequired: true,
      },
      {
        type: "number",
        field: "cols",
        isRequired: true,
      },
    ],
  }, // above is  for Text
];
export const Arr = (type) => specsFormTypes.find(e => e.type === type).form;
export const Validations = (type) => {
  const form = Arr(type);
  let schema = {};
  form.forEach(e=> {
    if(e.isRequired) {
      schema[e.field] = yup.string().required("This field is required");
    } 
  });
  return schema;
}
