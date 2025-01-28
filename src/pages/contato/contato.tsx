import { Link } from 'react-router-dom'
import './contato.css'

export function Contato(){
    return(
        <div>
            <h1>pagina Contato</h1>
            <h3>Telefone: (xx) xxxx-xxxx</h3>
            <Link to="/">Home</Link> <br />
            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/produto">produto</Link>  <br />
        </div>
    )
}