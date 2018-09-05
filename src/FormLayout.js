import React from 'react';

const getErrorByKey = (key, errors) => errors[key][0].message;

export default ({
  onChange,
  onSubmit,
  isSubmitDisabled,
  fields,
  errors,
}) => {
  const formFields = Object.keys(fields).map(name => (
    <input
      name={name}
      onChange={onChange}
      value={fields[name].value}
      key={`key-${name}`}
    />
  ));
  

  return (
    <form>
      {formFields}
      <button disabled={isSubmitDisabled} onClick={onSubmit} type="submit">submit</button>
    </form>
  )
}
