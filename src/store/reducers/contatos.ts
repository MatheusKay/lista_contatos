import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      titulo: 'Kayque',
      email: 'exemplo@gamil.com',
      contato: 40028922,
      criterio: enums.default.LETRA_K,
      id: 1
    },
    {
      titulo: 'Atheus',
      email: 'exemplo@gamil.com',
      contato: 40028922,
      criterio: enums.default.LETRA_A,
      id: 2
    },
    {
      titulo: 'Irineu',
      email: 'exemplo@gamil.com',
      contato: 40028922,
      criterio: enums.default.LETRA_I,
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id != action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (cont) => cont.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
