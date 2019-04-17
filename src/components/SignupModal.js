import React, {
  Component
} from 'react'
import {
  Button,
  Modal
} from 'react-bootstrap';

export default class SignupModal extends Component {

  state = {
    name: "",
    password: ""
  }

  changeHandler = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.onHide()
    this.setState({
      [e.target.placeholder]: e.target.value
    }, () => this.props.signupSubmitHandler(e, this.state));
  }

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
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.submitHandler}>
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
                id="pass"
                placeholder="password"
                value={this.state.password}
                onChange={this.changeHandler}
              />
                <br/>
                <br/>
              <button class="btn btn-primary">Sign Up</button>
            </form>
        </Modal.Body>
      </Modal>
    )
  }
}