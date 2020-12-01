// factorize the info here on the base of type
// have a validations section for yup
// have the input types here 


export default [
  {
    type: "text",
    field: "name",
    label: "User's name",
    style: {
      color: "green",
      margin: "10px",
    },
  },
  {
    type: "number",
    field: "number",
    label: "User's age",
    style: {
      color: "green",
      margin: "10px",
    },
  },
  {
    type: "array",
    field: "user",
    children: [
      {
        type: "text",
        field: "user.hobbies",
        label: "User's hobbies",
        style: {
          color: "green",
          margin: "10px",
        },
      },
      {
        type: "text",
        field: "user.os",
        label: "User's operating system",
        style: {
          color: "green",
          margin: "10px",
        },
      },
    ],
  },
];
