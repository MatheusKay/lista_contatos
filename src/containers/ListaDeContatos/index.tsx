import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'

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

  const contatosFiltro = filtrarContatos()

  return (
    <MainContainer>
      <Titulo as="p">
        {contatosFiltro.length}{' '}
        {contatosFiltro.length > 1 ? 'contatos marcados' : 'contato marcado'}{' '}
        como: {criterio == 'todos' ? '"Todos"' : `"${valor}"`}{' '}
        {termo ? `e pesquisa como: "${termo}"` : ''}
      </Titulo>
      <ul>
        {contatosFiltro.map((cont) => (
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
    </MainContainer>
  )
}

export default ListaDeContatos
