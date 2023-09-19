import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from '../../styles'

import { Form } from './styles'
// import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')

  const contatoNumerico = Number(contato)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        email,
        contato: contatoNumerico,
        criterio: titulo[0]
      })
    )
    navigate('/')
  }

  return (
    <S.MainContainer>
      <S.Titulo>Novo Contato</S.Titulo>
      <Form onSubmit={cadastrarContato}>
        <S.Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Nome do Contato"
        />
        <S.Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail do Contato"
        />
        <S.Campo
          value={contato}
          onChange={(e) => setContato(e.target.value)}
          type="number"
          placeholder="Numero do Contato"
        />
        <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>
      </Form>
    </S.MainContainer>
  )
}

export default Formulario
