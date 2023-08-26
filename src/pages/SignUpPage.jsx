import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"

export default function SignUpPage() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  

  function signUp(event) {
    if (password != passwordCheck) alert("Senhas não conferem");
    else 
    event.preventDefault();
      const data = {
      	email: email,
        name: name,
        image: foto,
        password: password
     };
  }

  return (
    <SingUpContainer>
      <form onSubmit={signUp}>
        <MyWalletLogo />
        <input placeholder="Nome" value={name} type="text" onChange={e => setName(e.target.value)} />
        <input placeholder="E-mail" value={email} type="email" onChange={e => setEmail(e.target.value)} />
        <input placeholder="Senha" value={password} type="password" autocomplete="new-password" onChange={e => setPassword(e.target.value)} />
        <input placeholder="Confirme a senha" value={passwordCheck} type="password" autocomplete="new-password" onChange={e => setPasswordCheck(e.target.value)} />
        <button>Cadastrar</button>
      </form>

      <Link>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
