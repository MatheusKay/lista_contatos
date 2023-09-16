import FiltroCard from '../../components/FIltroCard'
import * as S from './styled'

const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Contatos" />
    <S.Filtros>
      <FiltroCard legenda="Todos" contador={12} />
      <FiltroCard legenda="A" contador={12} />
      <FiltroCard legenda="B" contador={12} ativo />
      <FiltroCard legenda="C" contador={12} />
      <FiltroCard legenda="D" contador={12} />
      <FiltroCard legenda="E" contador={12} />
      <FiltroCard legenda="F" contador={12} />
      <FiltroCard legenda="G" contador={12} />
      <FiltroCard legenda="H" contador={12} />
      <FiltroCard legenda="I" contador={12} />
      <FiltroCard legenda="J" contador={12} />
      <FiltroCard legenda="K" contador={12} />
      <FiltroCard legenda="L" contador={12} />
      <FiltroCard legenda="M" contador={12} />
      <FiltroCard legenda="N" contador={12} />
      <FiltroCard legenda="O" contador={12} />
      <FiltroCard legenda="P" contador={12} />
      <FiltroCard legenda="Q" contador={12} />
      <FiltroCard legenda="R" contador={12} />
      <FiltroCard legenda="S" contador={12} />
      <FiltroCard legenda="T" contador={12} />
      <FiltroCard legenda="U" contador={12} />
      <FiltroCard legenda="V" contador={12} />
      <FiltroCard legenda="W" contador={12} />
      <FiltroCard legenda="X" contador={12} />
      <FiltroCard legenda="Y" contador={12} />
      <FiltroCard legenda="Z" contador={12} />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
