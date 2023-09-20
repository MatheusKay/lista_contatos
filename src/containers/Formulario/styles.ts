import styled from 'styled-components'
// import { Campo } from '../../styles'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  margin: 0 auto;

  button {
    margin-top: 16px;
  }
`

export const MainContato = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainButton = styled(MainContato)`
  justify-content: end;
`

// export const CampoCont = styled(Campo)`
//   margin-bottom: 100px;
// `

export const ImgContAdd = styled.img`
  width: 120px;
`

export const ImgCont = styled(ImgContAdd)`
  width: 52px;
`
