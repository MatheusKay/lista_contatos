import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Irineu', 'exemplo@gamil.com', 40028922, 1),
    new Contato('Atheus', 'exemplo@gamil.com', 40028922, 2),
    new Contato('Kayque', 'exemplo@gamil.com', 40028922, 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id != action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
