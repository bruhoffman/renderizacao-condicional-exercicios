import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./styled";

function TelaCadastro(props) {
  const cadastrar = () => {
    // fluxo de cadastro (ainda veremos)
    props.mudarTela("TelaCadastrarEndereco");
  };

  const mostrarTelaLogin = () => {
    props.mudarTela("TelaLogin");
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const onChangeNome = (e) => {
    setNome(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeSenha = (e) => {
    setSenha(e.target.value);
  };

  const imprimir = (event) => {
    event.preventDefault();
    const imprimir = { nome, email, senha };
    console.log(imprimir);
  };

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="name"> Nome: </StyledLabel>
        <Input id="name" onChange={onChangeNome} />

        <StyledLabel htmlFor="email"> E-mail: </StyledLabel>
        <Input id="email" onChange={onChangeEmail} />

        <StyledLabel htmlFor="password"> Senha: </StyledLabel>
        <Input id="password" type={"password"} onChange={onChangeSenha} />

        <StyledLabel htmlFor="password-confirm">
          {" "}
          Confirmação da senha:{" "}
        </StyledLabel>
        <Input id="password-confirm" type={"password"} />

        <SendButton onClick={cadastrar}>Cadastrar</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>
          Já possuo cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
