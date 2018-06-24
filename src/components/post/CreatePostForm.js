import React from 'react';
import compose from 'react-reformed/lib/compose';
import reformed from 'react-reformed';
import {
  Form,
  Label,
  Input,
  Button,
  FormGroup,
  FormFeedback,
} from 'reactstrap';
import PropTypes from 'prop-types';
import validateSchema from 'react-reformed/lib/validateSchema';

const TYPES = [{
  label: 'Normal',
  value: 'success',
}, {
  label: 'Informativo',
  value: 'info',
}, {
  label: 'Alerta',
  value: 'warning',
}, {
  label: 'Peligro',
  value: 'danger',
}];

const CreatePostForm = ({
  model,
  schema,
  submit,
  bindInput,
}) => (
  <Form onSubmit={(e) => {
    e.preventDefault();
    submit(model);
  }}
  >
    <FormGroup>
      <Label for="exampleEmail">Titulo</Label>
      <Input
        type="text"
        invalid={!schema.fields.title.isValid}
        placeholder="Titulo"
        {...bindInput('title')}
      />
      {
        !schema.fields.title.isValid &&
        <FormFeedback>
          {
            schema.fields.title.errors.map(error => (
              <span key={error}>{error}</span>
            ))
          }
        </FormFeedback>
      }
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Descripcion</Label>
      <Input
        type="textarea"
        invalid={!schema.fields.description.isValid}
        placeholder="Descripcion"
        {...bindInput('description')}
      />
      {
        !schema.fields.description.isValid &&
        <FormFeedback>
          {
            schema.fields.description.errors.map(error => (
              <span key={error}>{error}</span>
            ))
          }
        </FormFeedback>
      }
    </FormGroup>
    <FormGroup>
      <Label for="exampleSelect">Tipo de Mensaje</Label>
      <Input
        id="postType-"
        type="select"
        name="postType"
        {...bindInput('type')}
      >
        <option>Selecciona una</option>
        {
          TYPES.map(({ value, label }) => (
            <option
              key={value}
              value={value}
            >
              {label}
            </option>
          ))
        }
      </Input>
    </FormGroup>
    <Button
      type="submit"
      disabled={!schema.isValid}
    >Submit
    </Button>
  </Form>
);

CreatePostForm.defaultProps = {
  model: {},
  schema: {},
};

CreatePostForm.propTypes = {
  model: PropTypes.object,
  schema: PropTypes.object,
  submit: PropTypes.func.isRequired,
  bindInput: PropTypes.func.isRequired,
};

export default compose(
  reformed(),
  validateSchema({
    title: {
      required: true,
      formatError: () => 'El Titulo es obligatorio',
    },
    description: {
      required: true,
      formatError: () => 'La Descripcion es obligatoria',
    },
  }),
)(CreatePostForm);
