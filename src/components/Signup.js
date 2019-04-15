import React from "react";

class Signup extends React.Component {
  state = {
    name: "",
    password: ""
  };

  changeHandler = e => {
    console.log(e);
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(e, this.state);
    this.setState({
      name: "",
      password: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="name"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          placeholder="password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <button>Sign Up</button>
      </form>
    );
  }
}

export default Signup;