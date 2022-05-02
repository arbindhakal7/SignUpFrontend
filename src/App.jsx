import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  constructor(){
    super()
    this.state = {
      fullname: '',
      username: '',
      email: '',
      password: ''
    }
  }
  render() {
    return( 
      <div>
        <div className="container">
          <div className="form-div">
            <form>
              <input type= 'text' placeholder="Full Name" onchange = {this.changeFullName} 
              value={this.state.fullname} className='form=control form-group'/>

              <input type= 'text' placeholder="User Name" onchange = {this.changeUserName} 
              value={this.state.username} className='form=control form-group'/>

              <input type= 'text' placeholder="Email" onchange = {this.changeEmail} 
              value={this.state.email} className='form=control form-group'/>

              <input type= 'text' placeholder="Password" onchange = {this.changePassword} 
              value={this.state.password} className='form=control form-group'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
