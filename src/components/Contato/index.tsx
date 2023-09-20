import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import ContatoClass from '../../models/Contato'

import { remover, editar } from '../../store/reducers/contatos'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  contato: contatoOriginal,
  email: emailOriginal,
  titulo: tituloOriginal,
  id,
  criterio
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState(0)

  useEffect(() => {
    if (contatoOriginal > 0) {
      setContato(contatoOriginal)
      setEmail(emailOriginal)
      setTitulo(tituloOriginal)
    }
  }, [contatoOriginal, emailOriginal, tituloOriginal])

  const setandoContato = (e: ChangeEvent<HTMLInputElement>) => {
    const valorNumerico = Number(e.target.value)

    return valorNumerico
  }

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setTitulo(tituloOriginal)
    setContato(contatoOriginal)
    setEmail(emailOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>
        {estaEditando && <em>Editando: </em>}
        <S.CampoTitulo
          value={titulo}
          disabled={!estaEditando}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </S.Titulo>
      <S.CompoEmail
        value={email}
        disabled={!estaEditando}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Label>Tel/Cel: </S.Label>
      <S.Campo
        disabled={!estaEditando}
        value={contato}
        onChange={(e) => setContato(setandoContato(e))}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    email,
                    contato,
                    criterio,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoRemoverCancelar onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoRemoverCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRemoverCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
