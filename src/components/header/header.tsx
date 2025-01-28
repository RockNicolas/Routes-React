import {Link} from 'react-router-dom'
import './header.css'

export function Header(){
    return(
        <header>
            <h2>InformaticaRock</h2>
            <div>  
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/produto/:id">Produto</Link>
                <Link to="/contato">Contato</Link>
            </div>
        </header>
    )
}