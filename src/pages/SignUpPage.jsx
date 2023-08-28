import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import axios from "axios"
import dotenv from "dotenv";
//dotenv.config();


const URL = 'http://localhost:5000';

export default function SignUpPage() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const navigate = useNavigate();
    
  function returnHome() {
      navigate("/");
  }

  function signUpError(answer) {
      if (answer.request.status == 409) alert("Esse email já foi cadastrado") 
      else alert(answer.message);
  }

  function signUp(event) {
    if (password != passwordCheck) alert("Senhas não conferem");
    else {
        event.preventDefault();
          const data = {
            name: name,
            email: email,
            password: password
        };
        const query = axios.post(URL+'/signup', data);
        query.then(returnHome); 
        query.catch(signUpError);
    }
  } 

  return (
    <SingUpContainer>
      <form onSubmit={signUp}>
        <MyWalletLogo />
        <input placeholder="Nome" value={name} type="text" onChange={e => setName(e.target.value)} />
        <input placeholder="E-mail" value={email} type="email" onChange={e => setEmail(e.target.value)} />
        <input placeholder="Senha" value={password} type="password" autocomplete="new-password" onChange={e => setPassword(e.target.value)} />
        <input placeholder="Confirme a senha" value={passwordCheck} type="password" autoComplete="new-password" onChange={e => setPasswordCheck(e.target.value)} />
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
