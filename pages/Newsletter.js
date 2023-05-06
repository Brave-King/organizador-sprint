import React, { useState } from 'react';
import '../css/Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Subscribing email: ${email}`);
        setEmail('');
    };

    return (
        <div className="container">
            <form className="newsletter-form" onSubmit={handleSubmit}>
                <h2>¡Suscríbete a nuestro newsletter!</h2>
                <p>Recibe nuestras últimas noticias y ofertas especiales directamente en tu correo electrónico.</p>
                <div className="input-container">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Ingresa tu correo electrónico"
                        required
                    />
                    <button type="submit">Suscribirse</button>
                </div>
                <p className="confirmation-message">Gracias por suscribirte a nuestro newsletter.</p>
                <p className="unsubscribe-message">¿Quieres cancelar tu suscripción? Haz clic aquí.</p>
            </form>
        </div>
    );
};

export default Newsletter;
