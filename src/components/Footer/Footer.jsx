import React, { Component } from 'react';
import './style.css';
import logo from '../../assets/images/logo/logo-site-v2.png';
import iconFacebook from '../../assets/images/footer/icon-footer-facebook.png';
import iconLinkedin from '../../assets/images/footer/icon-footer-linkedin.png';
import iconPhone from '../../assets/images/footer/icon-footer-phone-mobile.png';
import iconYoutube from '../../assets/images/footer/icon-footer-youtube.png';
import iconInstagram from '../../assets/images/footer/instagram.png';
import iconEndeavor from '../../assets/images/footer/icon-footer-logo-endeavor.png';

class Footer extends Component {

    render() {
        return (
            <footer class="site-footer">
                <div class="container">
                    <div class="footer-col">
                        <a href="#" class="logo">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <nav class="footer-col">
                        <ul class="footer-menu">
                            <li class="footer-menu-item footer-item-name--dst">
                                <p>iClinic</p>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#">Planos e Preços</a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#">Quem somos</a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#">Cursos iClinic</a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#">Blog</a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#">Materiais Educativos</a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#" title="Casos de Sucesso">Casos de Sucesso</a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#" title="Contato">Contato</a>
                            </li>
                        </ul>
                    </nav>
                    <nav class="footer-col">
                        <ul class="footer-menu">
                            <li class="footer-menu-item footer-item-name--dst">
                                <p>Links Úteis</p>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#">Central de Ajuda</a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#">Funcionalidades</a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#">Termos de uso</a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#">Política de Privacidade</a>
                            </li>
                            <li class="footer-menu-item">
                                <a href="#">Trabalhe conosco</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="footer-col">
                        <p class="footer-item-name--dst">Onde Estamos</p>
                        <p class="footer-item-text--dst">Avenida Presidente Vargas, 1265 Ribeirão Preto, SP</p>
                        <div class="tel">
                            <img src={iconPhone} />
                            <p class="footer-text--phone"><a href="tel:+55-11-2199-6980"> (11) 2199-6980</a>
                            </p>
                        </div>
                    </div>
                    <div class="footer-col footer-col-links">
                        <p class="footer-item-name--dst">Siga nas Redes Sociais</p>
                        <p class="footer-links">
                            <a href="#" title="Facebook">
                                <img class="icon" src={iconFacebook} alt="ícone Facebook" />
                            </a>
                            <a href="#" title="Youtube">
                                <img class="icon" src={iconYoutube} alt="ícone Youtube" />
                            </a>
                            <a href="#" title="Linkedin">
                                <img class="icon" src={iconLinkedin} alt="ícone Linkedin" />
                            </a>
                            <a href="#" title="Instagram">
                                <img class="icon" src={iconInstagram} alt="ícone Instagram" />
                            </a>
                        </p>
                        <p class="footer-item-name--dst">Uma empresa:</p>
                        <p class="footer-links">
                            <a href="#">
                                <img src={iconEndeavor} alt="ícone Endeavor" />
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;