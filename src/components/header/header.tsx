import {Link} from 'react-router-dom'
import './header.css'

export function Header(){
    return(
        <header>
            <h2>
                <Link to="/">InformaticaRock</Link>
            </h2>
            <div>  
                <Link to="/sobre">Sobre</Link>
                <Link to="/produto/:id">Produto</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/login">Login</Link>
            </div>
        </header>
    )
}