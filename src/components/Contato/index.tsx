import { useState } from 'react'

import * as S from './styles'

type Props = {
  titulo: string
  email: string
  contato: number
}

const Contato = ({ contato, email, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Email>{email}</S.Email>
      <S.Label>Tel/Cel: </S.Label>
      <S.Descricao value={contato} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemoverCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoRemoverCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverCancelar>Remover</S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
