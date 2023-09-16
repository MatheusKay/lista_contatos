import styled from 'styled-components'

import { Props } from '.'

type PropsEstilo = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsEstilo>`
  padding: 8px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  cursor: pointer;
`

export const Ordem = styled.span`
  font-wight: bold;
  font-size: 18px;
`

export const Contador = styled.span`
  text-align: end;
  font-size: 14px;
`
