import React, { Component } from 'react';
import logo from '../../assets/images/logo/logo-site-v2.png';
import './style.css';
import Link from './../Link';

class Header extends Component {

    render() {
        return (
            <header id="main-header" class="whatsapp rescue">
                <div class="container">
                    <a href="#" title="iClinic">
                        <img class="header-img" src={logo} alt="Teleconsulta iClinic: atenda os seus pacientes de qualquer lugar" />
                    </a>
                    <div class="button-group">
                        <Link url="#" title="Iniciar teste grátis" type="custom" class="btn btn-sm btn-orange btn-landing-page" />
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;