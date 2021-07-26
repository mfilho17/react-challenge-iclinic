import React, { Component } from 'react';
import './style.css';

function selectTypeButton(type, className) {

    switch (type) {
        case 'custom':
            return className
        case 'button':
            return 'btn btn-orange'
        case 'outline':
            return 'btn btn-transparent'
        default:
            return ''
    }
}
class Link extends Component {


    render() {
        return (
            <a href={this.props.url}
                className={selectTypeButton(this.props.type, this.props.class)}
                title={this.props.title}>{this.props.title}</a>
        );
    }
}

export default Link;