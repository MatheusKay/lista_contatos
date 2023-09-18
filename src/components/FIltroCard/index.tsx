import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'iniciais' | 'todos'
  valor?: enums.default
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtros, contatos } = useSelector((state: RootReducer) => state)

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtros.criterio === criterio
    const mesmoValor = filtros.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'iniciais') {
      return contatos.itens.filter((item) => item.criterio === valor).length
    }
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Ordem>{legenda}</S.Ordem>
      <S.Contador>{contador}</S.Contador>
    </S.Card>
  )
}

export default FiltroCard
