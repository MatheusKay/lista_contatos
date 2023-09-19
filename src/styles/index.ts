import styled, { createGlobalStyle } from 'styled-components'
// import { Botao } from '../components/Contato/styles'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.div`
  height: 100vh;
  padding: 0 40px;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  color: #666;
  font-weight: bold;
`

export const Botao = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: bold;
  border: none;
  background-color: #2f3640;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #44bd32;
`

export default EstiloGlobal

// vermelho: #C23616;
// verde: #44bd32
