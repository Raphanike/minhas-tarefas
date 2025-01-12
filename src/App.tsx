import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Bar } from './styles'

import store from './store'
import Home from './pages/home'
import Cadastro from './pages/home/cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Bar>
        <RouterProvider router={rotas} />
      </Bar>
    </Provider>
  )
}

export default App
