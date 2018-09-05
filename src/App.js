import React, { PureComponent } from 'react';
import FormLayout from './FormLayout';
import validation from './addValidation';
import { isEmpty } from 'ramda';

const FIELDS = ['firstName', 'lastName'];

const createForm = keys => {
  const fields = [];

  keys.forEach(key => {
    fields[key] = {
      value: '',
    };
  });

  return {
    errors: {},
    fields,
  };
};

class App extends PureComponent {
  state = {
    form: createForm(FIELDS),
    isSubmitDisabled: false,
  }

  change = (name, changes) => {
    const { form, isSubmitDisabled } = this.state;

    const { form: newForm } = this.props.change({
      name,
      changes,
      form,
    });


    this.setState({
      form: newForm,
    });

    return newForm;
  }

  onChange = ({ target }) => {
    const { name, value } = target;

    return this.change(name, {
      [name]: {
        value,
      }
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const {
      errors,
    } = this.change();

  }

  render() {
    const {
      isSubmitDisabled,
      form: {
        fields,
        errors,
      }
    } = this.state;

    console.log(this.state);

    return (
      <FormLayout
        fields={fields}
        errors={errors}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        isSubmitDisabled={isSubmitDisabled}
      />
    );
  }
}

export default validation(App);
