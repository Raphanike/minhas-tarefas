import { configureStore } from '@reduxjs/toolkit'

import tarefasreducer from './redurces/tarefas'
import filtroReducer from './redurces/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasreducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
