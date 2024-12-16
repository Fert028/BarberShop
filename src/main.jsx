import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.scss'

import { Provider } from 'react-redux'
import store from './store/store'

import { Root } from './routes/Root/Root'
import { ErrorPage404 } from './routes/ErrorPage404/ErrorPage404'
import { Home } from './routes/Home/Home'
import { Services } from './routes/Services/Services'
import { Contacts } from './routes/Contacts/Contacts'
import { LogIn } from './routes/LogIn/LogIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/contacts',
        element: <Contacts />
      },
      {
        path: '/login',
        element: <LogIn />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
