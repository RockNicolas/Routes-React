import { Link } from 'react-router-dom'

export function Sobre(){
    return(
        <div>
            <h1>pagina sobre</h1>
            <span>Ir para a pagina home</span>
            <Link to="/">Home</Link>
            <Link to="/produto">produto</Link> <br />
            <Link to="/contato">contato</Link>  <br />
        </div>
    )
}