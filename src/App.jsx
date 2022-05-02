import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
    };

    this.changeFullName = this.changeFullName.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullname: event.target.value,
    });
  }

  changeUserName(event) {
    this.setState({
      username: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      fullname: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }

    axios.post('http://localhost:5000/app/signup', registered)
    .then(res => {
      console.log(res.data)
    })
    this.setState({
      fullname:'',
      email:'',
      username:'',
      password:''
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  onchange={this.changeFullName}
                  value={this.state.fullname}
                  className="form=control form-group"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  onchange={this.changeUserName}
                  value={this.state.username}
                  className="form=control form-group"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  onchange={this.changeEmail}
                  value={this.state.email}
                  className="form=control form-group"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  onchange={this.changePassword}
                  value={this.state.password}
                  className="form=control form-group"
                />
              </div>
              <div>
                <input
                  type="submit"
                  className="btn btn-danger btn-block"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
