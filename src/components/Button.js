import React, { Component } from 'react';

class Button extends Component {
  constructor(props){
    super(props);

    this.state={
      value:this.props.value,
      isOperator:this.props.isOperator,
    }

  }


 


  render() {
    return (
      <button 
      type='button'
      className='btn btn-primary'>{this.state.value}</button>
    );
  }
}

export default Button;
