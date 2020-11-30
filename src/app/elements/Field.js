import React from 'react'
import { Input } from "./Input";
import CheckBox from "./CheckBox";
import { Divider } from "./Divider";
import { FileUploader } from "./FileUploader";
import { Text } from "./Text";
import { TableElement } from "./Table";


const elementTypes = [
  { type: 1, component: TableElement },
  { type: 2, component: Input },
  { type: 3, component: CheckBox },
  { type: 4, component: FileUploader },
  { type: 5, component: Text },
  { type: 6, component: Divider },
];
export const C = (type) => elementTypes.find(e => e.type === type);
export const Field = ({ type, ...props}) => {
    const Component = C(type).component;
    return <Component {...props} />;
}
