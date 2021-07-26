import React, { Component } from 'react';
import './style.css';
import Link from './../Link';

class SectionBlue extends Component {

    render() {
        return (
            <section class="blue-cta">
                <div class="container section-title">
                    <h4>Oriente pacientes sobre a COVID-19 com o iClinic Marketing</h4>
                    <p> Envie lembretes periódicos, planos de cuidado e orientações sobre diversos assuntos, como a prevenção e boas práticas contra a COVID-19. Revolucione sua clínica com o iClinic Marketing! </p>
                </div>
                <div class="container short-register-form">
                    <Link url="#" title="Quero fazer teste grátis" type="outline" />
                </div>
            </section>
        );
    }

}

export default SectionBlue;