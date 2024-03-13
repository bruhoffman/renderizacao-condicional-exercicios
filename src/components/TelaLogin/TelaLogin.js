import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton,
} from "./styled";

function TelaLogin(props) {
  const login = () => {
    // fluxo de login (ainda veremos)
    props.mudarTela("TelaPrincipal");
  };

  const mostrarTelaCadastro = () => {
    props.mudarTela("TelaCadastro");
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeSenha = (e) => {
    setSenha(e.target.value);
  };

  const imprimir = (event) => {
    event.preventDefault();

    const imprimir = { email, senha };
    console.log(imprimir);
  };

  return (
    <FormContainer>
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel htmlFor="email"> E-mail: </StyledLabel>
        <Input htmlFor="email" onChange={onChangeEmail} />

        <StyledLabel htmlFor="password">Senha: </StyledLabel>
        <Input id="password" type={"password"} onChange={onChangeSenha} />

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>
          Cadastre-se
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
