import React, { Component } from 'react';
import './style.css';

class Article extends Component {

    render() {
        return (
            <article className={this.props.className}>
                <img alt={this.props.alt} class="lazy" src={this.props.img} />
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </article>
        );
    }

}

export default Article;