import React from "react";

class Login extends React.Component {
  state = {
    name: "",
    password: ""
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
      password: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.loginSubmitHandler}>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default Login;
