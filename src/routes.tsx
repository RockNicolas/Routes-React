import {createBrowserRouter} from 'react-router-dom';
import { Home } from './pages/home/home'
import { Sobre } from './pages/sobre/sobre'
import { Contato } from './pages/contato/contato'
import {Produto } from './pages/produtos/produto'
import { NotFound } from './pages/notfound/notfound'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/sobre",
        element: <Sobre/>
    },
    {
        path: "/contato",
        element: <Contato/>
    },
    {
        path: "/produto/:id",
        element: <Produto/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
])

export { router };