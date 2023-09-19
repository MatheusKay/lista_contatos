import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import ContatoClass from '../../models/Contato'

import { remover, editar } from '../../store/reducers/contatos'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  contato: contatoOriginal,
  email,
  titulo,
  id,
  criterio
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [contato, setContato] = useState(0)

  useEffect(() => {
    if (contatoOriginal > 0) {
      setContato(contatoOriginal)
    }
  }, [contatoOriginal])

  const setandoContato = (e: ChangeEvent<HTMLInputElement>) => {
    const valorNumerico = Number(e.target.value)

    return valorNumerico
  }

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setContato(contatoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>
        {estaEditando && <em>Editando: </em>}
        {titulo}
      </S.Titulo>
      <S.Email>{email}</S.Email>
      <S.Label>Tel/Cel: </S.Label>
      <S.Descricao
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
