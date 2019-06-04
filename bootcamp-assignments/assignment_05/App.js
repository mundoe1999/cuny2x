import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

/*
function App() {
  return (
    <div class="App">
      <header class="App-header">
       <HelloWorld />
      </header>
    </div>
  );
}
*/

class ContactCard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.workNum == null){
      return(
        <div className = "contact">
          <h1>~{this.props.name}~</h1>
          <h2>Mobile #: {this.props.mobileNum}</h2>
          <h2>email: {this.props.email}</h2>
        </div>
  
      )
    }
    return(
      <div className = "contact">
        <h1>~{this.props.name}~</h1>
        <h2>Mobile #: {this.props.mobileNum}</h2>
        <h2>Work #:{this.props.workNum}</h2>
        <h2>email: {this.props.email}</h2>
      </div>

    )
  }
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobileNum: PropTypes.number.isRequired,
  workNum: PropTypes.number,
  email: PropTypes.string.isRequired
}


class Decrement extends Component{
  constructor(props){
    super(props);
    this.state = {
      val: props.val
    }

    this.DecreaseValue = this.DecreaseValue.bind();
  }

  DecreaseValue = () => {

    console.log("Press");
    this.setState({
      val: this.state.val - 1
    });

    
    if(this.state.val < 1){
      alert("Cannot be less than Zero");
      this.setState({val: 0});
      
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.val}</h1>
        <button onClick={this.DecreaseValue}>Decrement</button>
      </div>
    )
  }
};



class HelloWorld extends Component{
  render(){
    return <h1>Hello World</h1>
  }
};

class App extends Component{
  render(){
    return(
      <div className="App">
        
      <header className="App-header">
      <HelloWorld />
      <Decrement val={20} />

     </header>
     <div className="contact-container">
      <ContactCard name="Bob" mobileNum={9175552912} email="something@gmail.com" />
      <ContactCard name="Joseline" mobileNum={4371232912} email="flowerpower42@gmail.com" />
      <ContactCard name="Frederick" mobileNum={4206911337} email="ProfessionalMan@gmail.com" workNum={2126323133} />
    </div>
    </div>
    );
  }
}

export default App;
