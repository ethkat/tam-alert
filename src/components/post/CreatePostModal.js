import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CreatePostForm from './CreatePostForm';

const CreatePostModal = ({ close, isOpen, submit }) => (
  <Modal isOpen={isOpen}>
    <ModalHeader>Informa a tu comunidad</ModalHeader>
    <ModalBody>
      <CreatePostForm
        submit={submit}
      />
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={close}>Cancelar</Button>
    </ModalFooter>
  </Modal>
);

CreatePostModal.defaultProps = {
  isOpen: false,
};

CreatePostModal.propTypes = {
  close: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

export default CreatePostModal;
