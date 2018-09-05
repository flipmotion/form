import React, { PureComponent } from 'react';
import validate, { presence } from './validator';
import { compose } from 'ramda';

export default Component => class extends PureComponent {
  validator = () => compose(
    presence('firstName', {}, 'Не может быть пустым!'),
    presence('lastName', {}, 'Не может быть пустым!'),
  )

  change = ({ name, changes, form }) => ({
    form: validate(
      form,
      this.validator(),
      newForm => newForm,
    )(name, changes)
  });

  render() {
    return(
      <Component
        change={this.change}
      />
    )
  }
}

