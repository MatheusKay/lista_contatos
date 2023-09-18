import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FIltroCard'
import * as S from './styled'

import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtros)

  return (
    <S.Aside>
      <S.Campo
        type="text"
        placeholder="Contatos"
        value={termo}
        onChange={(e) => dispatch(alterarTermo(e.target.value))}
      />
      <S.Filtros>
        <FiltroCard criterio="todos" legenda="todos" />
        <FiltroCard
          valor={enums.default.LETRA_A}
          criterio="iniciais"
          legenda="A"
        />
        <FiltroCard
          valor={enums.default.LETRA_B}
          criterio="iniciais"
          legenda="B"
        />
        <FiltroCard
          valor={enums.default.LETRA_C}
          criterio="iniciais"
          legenda="C"
        />
        <FiltroCard
          valor={enums.default.LETRA_D}
          criterio="iniciais"
          legenda="D"
        />
        <FiltroCard
          valor={enums.default.LETRA_E}
          criterio="iniciais"
          legenda="E"
        />
        <FiltroCard
          valor={enums.default.LETRA_F}
          criterio="iniciais"
          legenda="F"
        />
        <FiltroCard
          valor={enums.default.LETRA_G}
          criterio="iniciais"
          legenda="G"
        />
        <FiltroCard
          valor={enums.default.LETRA_H}
          criterio="iniciais"
          legenda="H"
        />
        <FiltroCard
          valor={enums.default.LETRA_I}
          criterio="iniciais"
          legenda="I"
        />
        <FiltroCard
          valor={enums.default.LETRA_J}
          criterio="iniciais"
          legenda="J"
        />
        <FiltroCard
          valor={enums.default.LETRA_K}
          criterio="iniciais"
          legenda="K"
        />
        <FiltroCard
          valor={enums.default.LETRA_L}
          criterio="iniciais"
          legenda="L"
        />
        <FiltroCard
          valor={enums.default.LETRA_M}
          criterio="iniciais"
          legenda="M"
        />
        <FiltroCard
          valor={enums.default.LETRA_N}
          criterio="iniciais"
          legenda="N"
        />
        <FiltroCard
          valor={enums.default.LETRA_O}
          criterio="iniciais"
          legenda="O"
        />
        <FiltroCard
          valor={enums.default.LETRA_P}
          criterio="iniciais"
          legenda="P"
        />
        <FiltroCard
          valor={enums.default.LETRA_Q}
          criterio="iniciais"
          legenda="Q"
        />
        <FiltroCard
          valor={enums.default.LETRA_R}
          criterio="iniciais"
          legenda="R"
        />
        <FiltroCard
          valor={enums.default.LETRA_S}
          criterio="iniciais"
          legenda="S"
        />
        <FiltroCard
          valor={enums.default.LETRA_T}
          criterio="iniciais"
          legenda="T"
        />
        <FiltroCard
          valor={enums.default.LETRA_U}
          criterio="iniciais"
          legenda="U"
        />
        <FiltroCard
          valor={enums.default.LETRA_V}
          criterio="iniciais"
          legenda="V"
        />
        <FiltroCard
          valor={enums.default.LETRA_W}
          criterio="iniciais"
          legenda="W"
        />
        <FiltroCard
          valor={enums.default.LETRA_X}
          criterio="iniciais"
          legenda="X"
        />
        <FiltroCard
          valor={enums.default.LETRA_Y}
          criterio="iniciais"
          legenda="Y"
        />
        <FiltroCard
          valor={enums.default.LETRA_Z}
          criterio="iniciais"
          legenda="Z"
        />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
