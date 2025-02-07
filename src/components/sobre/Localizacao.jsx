import React from 'react';

export function Localizacao() {
  return (
    <div>
      <p>
        Nossa loja está localizada na Avenida Principal, 123, Centro, Cidade XYZ.
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14638.228087789174!2d-46.633309!3d-23.550520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5940e7d435df%3A0x2f7dbcc88b50d84f!2sAv.%20Paulista%2C%201111%20-%20Cerqueira%20César%2C%20São%20Paulo%20-%20SP%2C%2001301-000!5e0!3m2!1spt-BR!2sbr!4v1604535078837!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
