import { useParams } from 'react-router-dom'
import './produto.css'

export function Produto(){
    const { id } = useParams();

    return(
        <div>
            <h1>pagina Produto {id}</h1>
        </div>
    )
}