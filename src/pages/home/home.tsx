import { Link } from 'react-router-dom'
import { Header } from '../../components/header/header'
import './home.css'

export function Home(){
    return(
        <div>
            <Header/>
            
            <h1>Bem vindo a Pagina Home!</h1>
            <span>Home</span>
            <br />
            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/contato">Contato</Link> <br />
            <Link to="/produto">produto</Link>  <br />
        </div>
    )
}