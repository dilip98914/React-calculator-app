import React, { Component } from 'react';

class Input extends Component {
  constructor(props){
    super(props);

    this.state={
      input:'',
      one:'',
      two:'',
      operation:''
    }

    this.setTextArea=this.setTextArea.bind(this);

  }
  componentDidMount(){
    this.setTextArea()
  }

  setTextArea(){
    let {one,two,operation}=this.state;
    this.setState({
      input:one+' '+operation+' '+two
    });
  }

 


  render() {
    return (
      <div className='input'>
          <textarea className="form-control rounded-0" id="exampleFormControlTextarea1" rows="3">
          {this.state.input}
          </textarea>
      </div>
    );
  }
}

export default Input;
