import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      submitted: false,
      valid: false
    }  
  }
  
  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  } 
  changeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  } 
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  } 
  submitButton = (event) => {
    event.preventDefault();
    if (this.state.firstName && this.state.email && this.state.lastName) {
      this.setState({ valid: true })
    }
    this.setState({ submitted: true });
  }
  
  render() {
    return (
      <div className='container'>
        { this.state.submitted && this.state.valid ? <div className='success-message'>Success! Thank you for registering</div> : null }
        <form className='register-form' onSubmit={this.submitButton}>
          <input onChange={this.changeFirstName} value={this.state.firstName} className='form-field' placeholder='First Name' name='firstName'/>
          {this.state.submitted && !(this.state.firstName) ? <span>Please enter a first name</span> : null}
          <input onChange={this.changeLastName} value={this.state.lastName} className='form-field' placeholder='Last Name' name='lastName'/>
          {this.state.submitted && !(this.state.lastName) ? <span>Please enter a last name</span> : null}
          <input onChange={this.changeEmail} value={this.state.email} className='form-field' placeholder='Email' name='email'/>
          {this.state.submitted && !(this.state.email) ? <span>Please enter an email address</span> : null}
          <button>Register</button>
        </form>

      </div>
    );
  }
}

export default App;
