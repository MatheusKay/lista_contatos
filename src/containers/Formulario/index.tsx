import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from '../../styles'
import { Form, ImgContAdd, ImgCont, MainContato, MainButton } from './styles'

import ContAdd from '../../imagens/Vetor_de_Contato.png'
import Cont from '../../imagens/Vetor_de_Contato_Pessoa.png'
import Email from '../../imagens/Vetor_de_Email.png'
import Telefone from '../../imagens/Vetor_de_Telefone.png'

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
        <MainContato>
          <ImgContAdd src={ContAdd} alt="Imagem de contato novos" />
        </MainContato>
        <MainContato>
          <ImgCont src={Cont} alt="Imagem de contato em miniatura" />
          <S.Campo
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            type="text"
            placeholder="Nome do Contato"
          />
        </MainContato>
        <MainContato>
          <ImgCont src={Email} alt="Imagem de contato em miniatura" />
          <S.Campo
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail do Contato"
          />
        </MainContato>
        <MainContato>
          <ImgCont src={Telefone} alt="Imagem de contato em miniatura" />
          <S.Campo
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            type="number"
            placeholder="Numero do Contato"
          />
        </MainContato>
        <MainButton>
          <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>
        </MainButton>
      </Form>
    </S.MainContainer>
  )
}

export default Formulario
