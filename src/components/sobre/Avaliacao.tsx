import { useState } from 'react';
import '../../styles/avaliacao.css'

export function Avaliacao() {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState('');

  const handleStarClick = (index: number) => {
    setNota(index + 1);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComentario(event.target.value);
  };

  return (
    <div className="avaliacao">
      <h3>Avalie nossa loja</h3>
      <div className="estrelas">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`estrela ${nota > index ? 'preenchida' : ''}`}
            onClick={() => handleStarClick(index)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <textarea
        placeholder="Deixe seu comentário..."
        value={comentario}
        onChange={handleCommentChange}
      />
      <button onClick={() => alert(`Comentário: ${comentario}, Avaliação: ${nota} estrelas`)}>Enviar Avaliação</button>
    </div>
  );
}
