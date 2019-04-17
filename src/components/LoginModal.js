import React, {
  Component
} from 'react'
import {
  Button,
  Modal
} from 'react-bootstrap';

export default class LoginModal extends Component {

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
    e.preventDefault()
    this.props.onHide()
    this.props.loginSubmitHandler(e, this.state);
    this.setState({
      success: "Done!",
      name: "",
      password: ""
    })
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.loginSubmitHandler}>
              <br/>
              <input
                class="form-control"
                type="text"
                id="username"
                placeholder="name"
                value={this.state.name}
                onChange={this.changeHandler}
              />
            <br/>
            <br/>
              <input
                class="form-control"
                type="password"
                id="id"
                placeholder="password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
              <br/>
              <br/>
              <button class="btn btn-primary">Login</button>
            </form>
        </Modal.Body>

      </Modal>
    );
  }
}