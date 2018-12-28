import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
     rating :0
   }
   this.change=this.change.bind(this);
 }
 change(e){
   e.preventDefault();
   this.setState({rating :  e.target.value})
 }

  render() { 
    
    return (
      <div className="App">
       <div className="emotions_warpper">
       <div  className={((this.state.rating >= 0 ) &&(this.state.rating <3 ) )? "sad circle rating_active" : "sad circle "} > 

       </div>
        <div className={((this.state.rating >=3 ) &&(this.state.rating <4 ) ) ? "ok circle rating_active" : "ok circle "} > 

       </div>
       <div className={((this.state.rating >= 4 ) &&(this.state.rating <=5 ) )? "happy circle rating_active" : "happy circle "}> 

       </div> 
      </div>
      <input type="text"  onChange={this.change}/>
      </div>
    );
  }
}

export default App;
