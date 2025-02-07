import { Link } from 'react-router-dom';
import './sobre.css';
import { Avaliacoes } from '../../components/sobre/Avaliacoes';
import { Localizacao } from '../../components/sobre/Localizacao'

export function Sobre() {
  return (
    <div>
      <h1>Sobre a Loja</h1>
      <p>
        Nossa loja oferece produtos de alta qualidade para atender às suas
        necessidades. Temos uma ampla variedade de itens, sempre com os melhores
        preços e atendimento excepcional.
      </p>
      <div>
        <span>Ir para a página inicial</span>
        <Link to="/">Home</Link>
        <Link to="/produto">Produto</Link>
        <br />
        <Link to="/contato">Contato</Link>
      </div>

      <h2>Avaliações dos Usuários</h2>
      <Avaliacoes />
      
      <h2>Localização</h2>
      <Localizacao />
    </div>
  );
}
