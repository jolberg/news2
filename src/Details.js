import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props);
    }
    
    handleClick = () => {
        this.props.show();
    }
    
    render() {
        return (
            <div>
               <h3>{this.props.title}</h3>
               <img src={this.props.image}></img>
               <p>{this.props.description}</p>
               <a href='#' onClick={this.handleClick}>Back to news</a>
            </div>
        )
    }
}
