import React from 'react';
import styles from './Filtro.module.css';

interface FiltroProps {
  onFiltroChange: (tipo: string) => void;  
  onMarcaChange: (marca: string) => void; 
}

const Filtro: React.FC<FiltroProps> = ({ onFiltroChange, onMarcaChange }) => {
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltroChange(event.target.value);
  };

  const handleMarcaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onMarcaChange(event.target.value);
  };

  return (
    <div className={styles.filtro}>
      <h3>Filtrar por Tipo</h3>
      <select onChange={handleTypeChange} className={styles.filtroSelect}>
        <option value="">Selecione um tipo de Pc</option>
        <option value="completo">PC Completo</option>
        <option value="acessorios">PC com Acessórios</option>
      </select> <br /> <br />
      
      <h3>Filtrar por Marca</h3> 
      <select onChange={handleMarcaChange} className={styles.filtroSelect}>
        <option value="">Fabricante do Modelo de CPU</option>
        <option value="AMD">AMD</option>
        <option value="INTEL">INTEL</option>
      </select>
    </div>
  );
};

export default Filtro;
