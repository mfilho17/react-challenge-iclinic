import React, { Component } from 'react';
import './style.css';

class WhatsAppBar extends Component {

    render() {
        return (
            <section id="whatsapp-bar">
                <div class="container">
                    <p class="bar-text">Oriente seus pacientes mesmo que à distância com a <strong>Teleconsulta da iClinic.</strong> <a target="_blank" class="bar-link">Fale com um consultor.</a></p>
                </div>
            </section>
        );
    }

}

export default WhatsAppBar;