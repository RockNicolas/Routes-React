import { Outlet } from 'react-router-dom'
import { Header } from '../header/header'

export function Layout(){
    return(
        <>
            <Header />
            <Outlet />
            <br /><br />
            <footer>
                <span>Todos os direitos reservados @2025</span>
            </footer>
        </>
    )
}