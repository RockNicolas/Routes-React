import { Link } from 'react-router-dom'

export function Produto(){
    return(
        <div>
            <h1>pagina Produto</h1>
            <span>Ir para a pagina home</span>
            <Link to="/">Home</Link> <br />
            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/contato">produto</Link>  <br />
        </div>
    )
}