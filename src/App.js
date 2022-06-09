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
        <form className='row g-3' onSubmit={this.submitButton}>
          <div className="row mb-3">
            <label htmlFor="inputFirstName" className="col-sm-2 col-form-label-lg">First Name</label>
            <div className="col-sm-10">
              <input type="text" onChange={this.changeFirstName} value={this.state.firstName} className='form-control' placeholder='eg. John' name='firstName'/>
            </div>
            {this.state.submitted && !(this.state.firstName) ? <span>Please enter a first name</span> : null}
          </div>
          <div className="row mb-3">
            <label htmlFor="inputLastName" className="col-sm-2 col-form-label-lg">Last Name</label>
            <div className="col-sm-10">
              <input type="text" onChange={this.changeLastName} value={this.state.lastName} className='form-control' placeholder='eg. Krasinski' name='lastName'/>
            </div>
            {this.state.submitted && !(this.state.lastName) ? <span>Please enter a last name</span> : null}
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label-lg">Email</label>
            <div className="col-sm-10">
              <input type="email" onChange={this.changeEmail} value={this.state.email} className='form-control' placeholder='eg. johnkrasinski@gmail.com' name='email'/>
            </div>
            {this.state.submitted && !(this.state.email) ? <span>Please enter an email address</span> : null}
          </div>
          <div className="button-space">
            <button type='submit' id='button'>Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
