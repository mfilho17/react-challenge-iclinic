import React, { Component } from 'react';
import './style.css';

class MyButton extends Component {

    render() { 
        return (
            <div>
                <button className={ this.props.classMyButton }>
                    { this.props.labelMyButton }
                </button>
            </div>
        );
    }
}
 
export default MyButton;