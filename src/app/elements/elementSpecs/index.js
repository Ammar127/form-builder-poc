import React from 'react';
import { Modal, ModalContent } from "./Modal";
import {Form} from './Form';
export const ElementSpecs = (props) => {
  const item = props.item;
  console.log(item);
  return (
    <Modal isOpen={props.isOpen} handleClose={() => props.onModalClose(false)}>
      <ModalContent>
       <Form></Form>
      </ModalContent>
    </Modal>
  );
};
