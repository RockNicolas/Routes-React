import ContactInfo from '../../components/contato/ContactInfo'
import ContactForm from '../../components/contato/ContactForm'
import './contato.css';

export function Contato() {
    return (
        <div className="contato-container">
            <h1>Contato</h1>
            <div className="contact-content">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
}
