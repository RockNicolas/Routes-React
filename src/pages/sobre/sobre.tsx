import { Avaliacao } from '../../components/sobre/Avaliacao';
import { Localizacao } from '../../components/sobre/Localizacao';
import './sobre.css';

export function Sobre() {
  return (
    <div className="sobre">
      <h2>Sobre a Loja</h2>
      <Localizacao />
      <Avaliacao />

    </div>
  );
}
