import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./styled";

function TelaCadastrarEndereco(props) {
  const confirmar = () => {
    props.mudarTela("TelaPrincipal");
  };

  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [telefone, setTelefone] = useState("");

  const onChangeRua = (e) => {
    setRua(e.target.value);
  };

  const onChangeNumero = (e) => {
    setNumero(e.target.value);
  };

  const onChangeComplemtno = (e) => {
    setComplemento(e.target.value);
  };

  const onChangeTelefone = (e) => {
    setTelefone(e.target.value);
  };

  const imprimir = (event) => {
    event.preventDefault();
    const imprimir = { rua, numero, complemento, telefone };
    console.log(imprimir);
  };

  return (
    <FormContainer>
      <h1>Cadastro de Endereço</h1>

      <Form>
        <StyledLabel htmlFor="rua"> Rua: </StyledLabel>
        <Input id="rua" onChange={onChangeRua} />

        <StyledLabel htmlFor="numero"> Número: </StyledLabel>
        <Input id="numero" onChange={onChangeNumero} />

        <StyledLabel htmlFor="complemento"> Complemento: </StyledLabel>
        <Input id="complemento" onChange={onChangeComplemtno} />

        <StyledLabel htmlFor="telefone"> Telefone: </StyledLabel>
        <Input id="telefone" onChange={onChangeTelefone} />

        <SendButton onClick={confirmar}>Confirmar</SendButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastrarEndereco;
