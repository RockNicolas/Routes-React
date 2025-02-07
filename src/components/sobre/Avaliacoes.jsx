import React from 'react';

export function Avaliacoes() {
  const avaliacoes = [
    { usuario: 'Carlos', comentario: 'Excelente loja, muito bom atendimento!' },
    { usuario: 'Fernanda', comentario: 'Produtos de qualidade, super recomendo!' },
    { usuario: 'João', comentario: 'Entrega rápida e serviço ótimo!' },
  ];

  return (
    <div>
      {avaliacoes.map((avaliacao, index) => (
        <div key={index} className="avaliacao">
          <h3>{avaliacao.usuario}</h3>
          <p>{avaliacao.comentario}</p>
        </div>
      ))}
    </div>
  );
}
