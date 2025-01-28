import {createBrowserRouter} from 'react-router-dom';
import { Home } from './pages/home/index'
import { Sobre } from './pages/sobre/index'
import { Contato } from './pages/contato/index'
import {Produto } from './pages/produtos/index'
import { NotFound } from './pages/notfound/index'

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