import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';


class App extends Component {
  constructor(props){
    super(props);

    this.state={
      buttons:[1,2,3,4,5,6,7,8,9,0],
      operations:['+','-','*','/'],
      input1:[],
      input2:[],
      output:'',
      operation:'',
      operationAssigned:false,
      textarea:'',
    }

    this.buttonClicked=this.buttonClicked.bind(this);
  }

  ArrayToInteger(array){
    let number='';
    array.map(element=>{
      number+=element;
    });
    return parseInt(number);
  }



  setArea(text){
    this.setState({
      textarea:text
    });
  }


  componentDidMount(){
  }

  buttonClicked(buttonName){
    const {operationAssigned}=this.state;

    if(!operationAssigned){
      this.setState({
        input1:[...this.state.input1,buttonName],
      },()=>{

        this.setArea(String(this.ArrayToInteger(this.state.input1)));
      });
    }else{
      this.setState({
        input2:[...this.state.input2,buttonName],
      },()=>{
        this.setArea(String(this.ArrayToInteger(this.state.input2)));
      });
    }


  }

  setOperation(buttonName){
    this.setState({
      operation:buttonName,
      operationAssigned:true,
    },function(){
      console.log("operation",this.state.operation);
    });

  }

  evaluate(){
     const {input1,input2,operation}=this.state;
     if(operation=='+'){
        this.setState({
          output:this.ArrayToInteger(input1)+this.ArrayToInteger(input2),
          input1:[],
          input2:[],
          operation:'',
          operationAssigned:false
        },()=>{
        this.setArea(String(this.state.output));
        });
     }
      if(operation=='-'){
        this.setState({
          output:this.ArrayToInteger(input1)-this.ArrayToInteger(input2),
          input1:[],
          input2:[],
          operation:'',
          operationAssigned:false
        },()=>{
        this.setArea(String(this.state.output));
        });
     }
     if(operation=='*'){
            this.setState({
              output:this.ArrayToInteger(input1)*this.ArrayToInteger(input2),
              input1:[],
              input2:[],
              operation:'',
              operationAssigned:false
            },()=>{
            this.setArea(String(this.state.output));
            });
         }
     if(operation=='/'){
            this.setState({
              output:this.ArrayToInteger(input1)/this.ArrayToInteger(input2),
              input1:[],
              input2:[],
              operation:'',
              operationAssigned:false
            },()=>{
            this.setArea(String(this.state.output));
            });
         }



  }



  render() {
    return (
      <div className="container">
        <h1 className='heading'>Calculator App</h1>
        <textarea className='form-control' id='textarea'
         rows="2"
         value={this.state.textarea}
         disabled
         ></textarea>

      <div className='row'>
        
          {
          this.state.buttons.map((buttonName)=>(
               <div key={buttonName} className='button'>
                   <button className={`${buttonName} btn btn-danger`}
                  type='submit'
                  onClick={()=>this.buttonClicked(buttonName)}
                  >{buttonName}</button>

               </div>
            
            ))

         }

         {
          this.state.operations.map((buttonName)=>(
               <div key={buttonName} className='button'>
                   <button className={`${buttonName} btn btn-danger`}
                  type='submit'
                  onClick={()=>this.setOperation(buttonName)}
                  >{buttonName}</button>

               </div>
            
            ))

         }

         <button className="btn btn-primary"
        type='submit'
        onClick={()=>this.evaluate()}
        ><h4>=</h4></button>



       </div>
      
    


     
      







     
      </div>
    );
  }
}

export default App;
