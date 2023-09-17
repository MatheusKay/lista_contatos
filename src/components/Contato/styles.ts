import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Titulo = styled.h3`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
`
export const Email = styled.span`
  display: block;
  margin-bottom: 8px;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
`
export const Label = styled.label`
  color: #8b8b8b;
  font-size: 16px;
  line-height: 24px;
`

export const Descricao = styled.input`
  width: 90%;
  margin-bottom: 16px;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  border: none;
  background-color: transparent;
  resize: none;
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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

export const BotaoRemoverCancelar = styled(Botao)`
  background-color: #c23616;
`
