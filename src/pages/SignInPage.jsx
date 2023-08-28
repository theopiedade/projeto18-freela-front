import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState} from "react"
import axios from "axios"


const URL = 'http://localhost:5000';

export default function SignInPage() {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function signInSuccess(answer) {
    localStorage.setItem("Token", answer.data);
    console.log("Signin Token: "+answer.data);
    navigate("/home");
  }

  function signInError(answer) {
    alert(answer.message);
}

  function signIn(event) {
    if (!password && !email) alert("Preencha todos os campos para entrar");
    else {
        event.preventDefault();
          const data = {
            email: email,
            password: password
        };
        const query = axios.post(URL+'/signin', data);
        query.then(signInSuccess); 
        query.catch(signInError);
    }
  } 


  return (
    <SingInContainer>
      <form onSubmit={signIn}>
        <MyWalletLogo />
        <input data-test="email" placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input data-test="password" placeholder="Senha" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} />
        <button data-test="sign-in-submit" >Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
