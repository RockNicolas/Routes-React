import {createBrowserRouter} from 'react-router-dom';
import { Home } from './pages/home/index'
import { Sobre } from './pages/sobre/index'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/sobre",
        element: <Sobre/>
    }
])

export { router };