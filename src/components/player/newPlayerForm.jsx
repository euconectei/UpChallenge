import React from "react";
import styled from "styled-components";

//Hooks
import { useForm } from "../../hooks/useForm";

const InputStyled = styled.input`
  background-color: #555;
  border: 3px solid darkorange;
  border-radius: 3px;
  color: darkorange;
  font-family: "Press Start 2P";
  font-size: 16px;
  outline: none;
  padding: 10px;
`;

const ButtonStyled = styled.button`
  background-color: darkorange;
  border: none;
  border-radius: 2px;
  color: #333;
  display: block;
  font-family: "Press Start 2P";
  font-size: 16px;
  margin-top: 20px;
  outline: none;
  padding: 10px;
  width: 100%;
`;

const NewPlayerForm = ({ cbGame }) => {
  const { handleInputChange, handleSubmit, inputs } = useForm(cbGame);

  const onSubmit = () => {
    cbGame({ started: true, name: inputs.name });
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Player:</label>
        <InputStyled
          type="text"
          name="name"
          onChange={handleInputChange}
          value={inputs.name}
          required
        />
      </div>
      <ButtonStyled type="submit">Iniciar Corrida</ButtonStyled>
    </form>
  );
};
export default NewPlayerForm;
