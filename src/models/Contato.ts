class Contato {
  titulo: string
  email: string
  contato: number
  criterio: string
  id: number

  constructor(
    titulo: string,
    email: string,
    contato: number,
    id: number,
    criterio: string
  ) {
    this.titulo = titulo
    this.email = email
    this.contato = contato
    this.id = id
    this.criterio = criterio
  }
}

export default Contato
