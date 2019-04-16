import React from "react";

class Login extends React.Component {
  state = {
    name: "",
    password: "",
    success: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };

  loginSubmitHandler = e => {
    e.preventDefault();
    this.props.loginSubmitHandler(e, this.state);
    this.setState({
      success: "Done!"
    })
  };
  render() {
    return (

      <div className="d-md-flex h-md-100 align-items-center">
        <div className="col-md-6 p-0 bg-blue h-md-100">
          <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">


            <form onSubmit={this.loginSubmitHandler}>
              <h2 className="form-head">Login</h2>
              <br/>
              <label for="username">Username</label>
              <input
                className="form-control"
                type="text"
                id="username"
                placeholder="name"
                value={this.state.name}
                onChange={this.changeHandler}
              />
            <br/>
            <br/>
            <label for="pass">Password</label>
              <input
                className="form-control"
                type="password"
                id="id"
                placeholder="password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
              <br/>
              <br/>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
        <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
          <div className="success-text d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <p> {this.state.success} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
