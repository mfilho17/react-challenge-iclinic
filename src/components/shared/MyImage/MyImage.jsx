import React, { Component } from 'react';
// import arrayOfImages from './arrayOfImages';

const arrayOfImages = [
    {
        'url': 'https://master.dkd32rw4504d.amplifyapp.com/static/img/sprite/logo-site-v2.png',
        'title': 'Teleconsulta iClinic: atenda os seus pacientes de qualquer lugar'
    },
    {
        'url': 'https://master.dkd32rw4504d.amplifyapp.com/static/images/views/teleconsulta/desktop.png',
        'title': 'Teleconsulta iClinic: oriente seus pacientes à distância'
    },
    {
        'url': 'https://master.dkd32rw4504d.amplifyapp.com/static/images/views/teleconsulta/seguro.png',
        'title': 'Segurança dos dados do consultório'
    },
    {
        'url': 'https://master.dkd32rw4504d.amplifyapp.com/static/images/views/teleconsulta/celular.png',
        'title': 'Atendimento de qualquer lugar e dispositivo'
    },
    {
        'url': 'https://master.dkd32rw4504d.amplifyapp.com/static/images/views/teleconsulta/notebook.png',
        'title': 'Integração dos dados com o prontuário do sistema'
    }

];

class MyImage extends Component {

    render() {
        return (
            <img
                className={this.props.classMyImage}
                src={arrayOfImages[this.props.idMyImage].url}
                alt={arrayOfImages[this.props.idMyImage].title}
            />
        )
    }
}

export default MyImage;