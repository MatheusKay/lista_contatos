import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>2 contatos</p>
      <ul>
        {contatos.map((cont) => (
          <li key={cont.titulo}>
            <Contato
              titulo={cont.titulo}
              email={cont.email}
              contato={cont.contato}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
