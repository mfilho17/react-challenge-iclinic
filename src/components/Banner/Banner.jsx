import React, { Component } from 'react';
import ImgDesktop from '../../assets/images/content/desktop.png';
import ImgMobile from '../../assets/images/content/mobile.png';
import Link from './../Link';
import './style.css';

class Banner extends Component {

    render() {
        return (
            <section id="banner">
                <div class="container">
                    <div class="banner-form">
                        <h1 itemprop="alternativeHeadline">Teleconsulta iClinic: oriente seus pacientes à distância</h1>
                        <h2>Integração completa dos dados com o prontuário do iClinic, e segurança garantida para você e seus pacientes.</h2>
                        <Link url="#" title="Quero falar com um consultor" type="button" />
                        <h3>O Software Médico preparado para a LGPD</h3>
                    </div>
                    <div>
                        <span class="hidden"> true </span>
                        <span class="hidden">Teleconsulta iClinic: oriente seus pacientes à distância</span>
                        <div class="banner-image">
                            <div class="preview-image">
                                <picture>
                                    <source media="(min-width: 620px)" srcset={ImgDesktop} />
                                    <source srcset={ImgMobile} />
                                    <img alt="Teleconsulta iClinic: oriente seus pacientes à distância" class="lazy" src={ImgMobile} />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;