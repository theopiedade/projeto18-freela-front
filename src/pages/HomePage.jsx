import styled from "styled-components"
import { BiExit } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const URL = 'http://localhost:5000';

export default function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const token = localStorage.getItem("Token");

  function logout() {
    localStorage.removeItem("Token", answer.data);
    navigate("/");
  }

  /*
  useEffect(() => {
    const query = axios.get(URL+'/user', {"Token": token});
    query.then(response => {
        setName(response.data);
        console.log(response.data);
    });
  }, []);
  */

  return (
    <HomeContainer>
      <Header>
        <h1>Itens disponíveis:</h1>
        <BiExit onClick={logout}/>
      </Header>

      <TransactionsContainer>
        <ul>
          <ListItemContainer>
            <div>
              <span>30/11</span>
              <strong>Almoço mãe</strong>
            </div>
          </ListItemContainer>

          <ListItemContainer>
            <div>
              <span>15/11</span>
              <strong>Salário</strong>
            </div>
            <Value color={"positivo"}>3000,00</Value>
          </ListItemContainer>
        </ul>

      </TransactionsContainer>


      <ButtonsContainer>
        <button onClick={() => navigate("/home")}>
          <p>Tela Inicial</p>
        </button>
        <button onClick={() => navigate("/nova-transacao/:entrada")}>
          <p>Gerenciar</p>
        </button>
        <button onClick={() => navigate("/nova-transacao/:saida")}>
          <p>Adicionar</p>
        </button>
      </ButtonsContainer>

    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2px 5px 2px;
  margin-bottom: 15px;
  font-size: 26px;
  color: white;
`
const TransactionsContainer = styled.article`
  flex-grow: 1;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  article {
    display: flex;
    justify-content: space-between;   
    strong {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`
const ButtonsContainer = styled.section`
  margin-top: 15px;
  margin-bottom: 0;
  display: flex;
  gap: 15px;
  
  button {
    width: 50%;
    height: 115px;
    font-size: 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 18px;
    }
  }
`
const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "positivo" ? "green" : "red")};
`
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`