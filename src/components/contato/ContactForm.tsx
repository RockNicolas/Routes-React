import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Formulário enviado!", { name, email, message });
        alert("Mensagem enviada com sucesso!");
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Mensagem:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}
