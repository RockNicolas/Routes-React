import { Avaliacao } from '../../components/sobre/Avaliacao';
import { Localizacao } from '../../components/sobre/Localizacao';
import './sobre.css';

export function Sobre() {
  return (
    <div className="sobre">
      <h1>Sobre a Loja</h1>
      <Avaliacao />
      <Localizacao />
    </div>
  );
}
