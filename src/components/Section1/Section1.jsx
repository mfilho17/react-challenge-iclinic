import React, { Component } from 'react';
import './style.css';
import imgCelular from '../../assets/images/cards/celular.png';
import imgNotebook from '../../assets/images/cards/notebook.png';
import imgSeguro from '../../assets/images/cards/seguro.png';
import Article from '../Article';

class Section1 extends Component {

    render() {
        return (
            <section class="specify fix-med-ico">
                <div class="container section-title fix-med-ico padding">
                    <h2>Esteja próximo ao seu paciente mesmo que à distância!</h2>
                    <p> Realize consultas e orientações de onde estiver, de forma completamente integrada ao seu prontuário iClinic, e garanta mais segurança para você e o seu paciente! </p>
                </div>
                <div class="container group">
                    <Article
                        className="specify-item"
                        alt="Segurança dos dados do consultório"
                        img={imgSeguro}
                        title="Segurança dos dados do consultório"
                        text="Tenha todas suas consultas salvas em nuvem, com maior segurança para você e seus pacientes." />
                    <Article
                        className="specify-item"
                        alt="Atendimento de qualquer lugar e dispositivo"
                        img={imgCelular}
                        title="Atendimento de qualquer lugar e dispositivo"
                        text="Realize atendimentos para qualquer região e auxilie pacientes que não podem se deslocar." />
                    <Article
                        className="specify-item"
                        alt="Integração dos dados com o prontuário do sistema"
                        img={imgNotebook}
                        title="Integração dos dados com o prontuário do sistema"
                        text="Acesse o prontuário do iClinic e acompanhe todo o histórico dos pacientes de forma mais assertiva." />
                </div>
            </section>
        );
    }

}

export default Section1;