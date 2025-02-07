import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Sobre } from '../pages/sobre/sobre';
import { Contato } from '../pages/contato/contato';
import { Produto } from '../pages/produtos/produto';
import { NotFound } from '../pages/notfound/notfound';
import { Layout } from '../components/layout/layout';
import Login from '../pages/login/login';


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/sobre",
                element: <Sobre />
            },
            {
                path: "/contato",
                element: <Contato />
            },
            {
                path: "/produto/:id",
                element: <Produto />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export { router };
