import React, { Component } from 'react';
import './style.css';

class SectionImgText extends Component {

    render() {
        return (
            <section className={`section vertical-center borderless section-${this.props.direction}`}>
                <div class="container">
                    <div class="image">
                        {this.props.video ? (
                            <div class="video-container">
                                <iframe width="560" height="315" src={this.props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        ) : (
                            <img src={this.props.img} class="lazy big-image" />
                        )}

                    </div>
                    <div class="text">
                        <h2>{this.props.title}</h2>
                        <article>
                            <h3></h3>
                            <p>{this.props.text}</p>
                        </article>
                    </div>
                </div>
            </section>
        );
    }

}

export default SectionImgText;