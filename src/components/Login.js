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
      name: "",
      password: "",

    });
    this.setState({
      success: "Done!"
    })
  };
  render() {
    return (

      <div class="d-md-flex h-md-100 align-items-center">
        <div class="col-md-6 p-0 bg-blue h-md-100">
          <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">


            <form onSubmit={this.loginSubmitHandler}>
              <h2 class="form-head">Login</h2>
              <br/>
              <label for="username">Username</label>
              <input
                class="form-control"
                type="text"
                id="username"

                value={this.state.name}
                onChange={this.changeHandler}
              />
            <br/>
            <br/>
            <label for="pass">Password</label>
              <input
                class="form-control"
                type="password"
                id="id"

                value={this.state.password}
                onChange={this.changeHandler}
              />
              <br/>
              <br/>
              <button class="btn btn-primary">Login</button>
            </form>



          </div>
        </div>
        <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
          <div class="success-text d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <p> {this.state.success} </p>


          </div>
        </div>
      </div>



    );
  }
}

export default Login;