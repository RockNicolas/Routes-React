import React from 'react';
import styles from './Filtro.module.css';

interface FiltroProps {
  onFiltroChange: (tipo: string) => void;  
  onMarcaChange: (marca: string) => void; 
  onMonitorChange: React.Dispatch<React.SetStateAction<string>>;
}

const Filtro: React.FC<FiltroProps> = ({ onFiltroChange, onMarcaChange }) => {
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltroChange(event.target.value);
  };

  const handleMarcaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onMarcaChange(event.target.value);
  };

  const handleMonitorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltroChange(event.target.value); 
  };

  return (
    <div className={styles.filtro}>
      <h3>Filtrar por Tipo</h3>
      <select onChange={handleTypeChange} className={styles.filtroSelect}>
        <option value="">Selecione um tipo de Pc</option>
        <option value="completo">PC Completo</option>
        <option value="acessorios">PC com Acessórios</option>
      </select> 
      <br/> <br/>
      <select onChange={handleMarcaChange} className={styles.filtroSelect}>
        <option value="">Processadores</option>
        <option value="AMD">AMD</option>
        <option value="INTEL">INTEL</option>
      </select>
      <br/> <br/>
      <select onChange={handleMonitorChange} className={styles.filtroSelect}>
        <option value="">Monitor</option>
        <option value="17">17"</option>
        <option value="18">18"</option>
        <option value="19.5">19.5"</option>
        <option value="21.5">21.5"</option>
        <option value="23.8">23.8"</option>
        <option value="27">27"</option>
        <option value="32">32"</option>
      </select>
    </div>
  );
};

export default Filtro;
