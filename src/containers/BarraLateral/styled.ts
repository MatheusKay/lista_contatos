import styled from 'styled-components'

type Props = {
  mostrarFiltros: boolean
  menu: boolean
}

export const Aside = styled.aside<Props>`
  height: 100vh;
  overflow-y: scroll;
  padding: 16px;
  background-color: #ccc;

  ${(props) =>
    props.mostrarFiltros
      ? props.menu
        ? `@media (max-width: 767px) {
        height: 35vh;
      }`
        : `@media (max-width: 767px) {
        height: 10vh;
      }`
      : `@media (max-width: 767px) {
      height: 10vh;
      overflow: hidden;
    }`}
`

export const Filtros = styled.div`
  margin-top: 16px;

  @media (max-width: 767px) {
    opacity: 0;
    visibility: hidden;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    transition:
      opacity 0.3s ease-in-out,
      visibility 0.5s ease-in-out;

    &.aberto {
      // display: flex;
      opacity: 1;
      visibility: visible;
      transition:
        opacity 0.3s ease-in-out,
        visibility 0.5s ease-in-out;
    }
  }
`

export const MainFiltro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`

export const MenuHamb = styled.img`
  width: 52px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 767px) {
    opacity: 1;
    visibility: visible;
  }
`
