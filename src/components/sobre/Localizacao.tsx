import '../../styles/localizacao.css'

export function Localizacao() {
  return (
    <div className="localizacao">
      <h3>Localização da Loja</h3>
      <p>R. Maj. Pedro Sampaio, 199 - Rodolfo Teófilo, Fortaleza - CE, 60430-180</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31850.320986348204!2d-38.574264765234375!3d-3.746856599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74914d209e6ed%3A0x4a1f3b203465b1a9!2sICC!5e0!3m2!1spt-BR!2sbr!4v1738950754035!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy" 
      ></iframe>
    </div>
  );
}
