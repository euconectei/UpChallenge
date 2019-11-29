import React from 'react';

//Hooks
import { useForm } from '../hooks/useForm';

const NewPlayerForm = ({ cbGame }) => {
  // const { cbGame } = props;
  const { handleInputChange,
    handleSubmit,
    inputs } = useForm(cbGame);


  const onSubmit = () => {
    cbGame({ started: true, name: inputs.name });
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" name="name" onChange={handleInputChange} value={inputs.name} required />
      </div>
      <button type="submit">Iniciar</button>
    </form>
  )
}
export default NewPlayerForm;