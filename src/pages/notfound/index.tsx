import { Link } from 'react-router-dom'
import './index.css'

export function NotFound(){
    return(
    <div>
        <h1>404</h1>
        <h2>Ops, essa pagina n existe!!</h2>
        <Link to="/">Voltar para a pagina home</Link>
    </div>
    )
}