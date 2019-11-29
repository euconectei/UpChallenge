// https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57

import { useState } from 'react';

export const useForm = (callback) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback({ name: inputs.name });
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }

  return {
    handleInputChange,
    handleSubmit,
    inputs,
  };
}