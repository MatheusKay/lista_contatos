import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtros
  )

  const filtrarContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter((item) =>
        item.titulo.toLowerCase().includes(termo.toLowerCase())
      )

      if (criterio === 'iniciais') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.titulo[0] === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>2 contatos {termo}</p>
      <ul>
        {filtrarContatos().map((cont) => (
          <li key={cont.titulo}>
            <Contato
              id={cont.id}
              titulo={cont.titulo}
              email={cont.email}
              contato={cont.contato}
              criterio={criterio}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
