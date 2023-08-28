import styled from "styled-components"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const URL = 'http://localhost:5000';

export default function TransactionsPage() {
  const { transactionType } = useParams()
  const [value, setValue] = useState()
  const [description, setDescription] = useState()
  const navigate = useNavigate()
  const token = localStorage.getItem("Token")


  function transactionSendSuccess(answer) {
    console.log(answer.data);
    navigate("/home");
  }

  function transactionSendError(answer) {
    alert(answer.message);
  }


  function sendTransaction(event) {
    event.preventDefault();
    console.log(token);
    if (value && description && value != null && description != null) {

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }

      const data = {
        type: transactionType,
        value: value, 
        description: description
      }
      const query = axios.post(URL+'/transactions', data, config);
      query.then(transactionSendSuccess); 
      query.catch(transactionSendError);

    }
    else alert("Preencha todos os campos");
  }

  return (
    <TransactionsContainer>
      <h1>Nova TRANSAÇÃO</h1>
      <form onSubmit={sendTransaction}>
        <input placeholder="Valor" type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <input placeholder="Descrição" type="text" value={description} onChange={e => setDescription(e.target.value)}/>
        <button>Salvar TRANSAÇÃO</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
