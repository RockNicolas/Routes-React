import { Link } from 'react-router-dom'
import './index.css'

export function Home(){
    return(
        <div>
            <h1>Bem vindo a Pagina Home!</h1>
            <span>Essa é a minah primeira pagina com navegação</span>
            <br />
            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/contato">Contato</Link> <br />
            <Link to="/produto">produto</Link>  <br />
        </div>
    )
}