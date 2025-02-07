import '../../styles/localizacao.css'

export function Localizacao() {
  return (
    <div className="localizacao">
      <h3>Localização da Loja</h3>
      <p>Rua Exemplo, 123 - Bairro, Cidade - Estado</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.0322045723597!2d-46.567467!3d-23.5576347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce593e3a26a689%3A0x35b5b0a9f9b9b5a9!2sRua%20Exemplo%2C%20123%20-%20Centro%2C%20São%20Paulo%2C%20SP%2C%2001000-000!5e0!3m2!1spt-BR!2sbr!4v1656556248799!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
