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
    this.onSubmit = this.onSubmit.bind(this)
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
    };

    axios.post("http://localhost:5000/app/signup", registered).then((res) => {
      console.log(res.data);
    });
    this.setState({
      fullname: "",
      email: "",
      username: "",
      password: "",
    });
  }

  render() {
    return (
      <div>
        <div className="section-1-container section-container">
          <div className="container">
            <form onSubmit={this.onSubmit}>
              <div class="col-md-6">
                <label class="form-label" />
                <input
                  type="text"
                  placeholder="Full Name"
                  class="form-control"
                  value={this.state.fullname}
                  onChange={this.changeFullName}
                  id="fullname"
                />
              </div>
              <div class="col-md-6">
                <label for="inputUsername" class="form-label" />
                <input
                  type="text"
                  placeholder="Username"
                  class="form-control"
                  value={this.state.username}
                  onChange={this.changeUserName}
                  id="username"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail" class="form-label" />
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control"
                  value={this.state.email}
                  onChange={this.changeEmail}
                  id="email"
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label" />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.changePassword}
                  placeholder="Password"
                  class="form-control"
                  id="password"
                />
              </div>
              <div>
                <br></br>
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
