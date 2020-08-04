import React from "react";
import "./login.css";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const LOGIN_SUCCESS = "login successful.";
const LOGIN_ERROR = "Please try again later.";

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hiddenPassword: true,
      loginSuccess: false,
      loginError: false,
    };
  }

  render() {
    const hideiconstyle = this.state.hiddenPassword ? { display: "none" } : {};
    const showiconstyle = !this.state.hiddenPassword ? { display: "none" } : {};

    return (
      <React.Fragment>
        <Container>
          <form
            className="login-form"
            onSubmit={this.submitLoginRequest}
            noValidate
          >
            <Row>
              <Col>
                <h3>Sign In</h3>
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formLoginEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <div className="invalid-feedback">
                    Please provide a valid email
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formLoginPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      placeholder="Password"
                      type={this.state.hiddenPassword ? "password" : "text"}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      value={this.state.password}
                      required
                    />
                    <InputGroup.Append>
                      <InputGroup.Text
                        onClick={this.togglePassword}
                        style={showiconstyle}
                      >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                      </InputGroup.Text>
                      <InputGroup.Text
                        onClick={this.togglePassword}
                        style={hideiconstyle}
                      >
                        <i className="fa fa-eye-slash" aria-hidden="true"></i>
                      </InputGroup.Text>
                    </InputGroup.Append>
                    <div className="invalid-feedback">
                      Password must be 6 characters long It should contain a
                      number and <br></br> contain , uppercase and lowercase
                      letter
                    </div>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="/">Forgot Password</a>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Alert
                  variant="success"
                  className={!this.state.loginSuccess ? "hidden" : ""}
                >
                  {this.state.loginMessage || LOGIN_SUCCESS}
                </Alert>
                <Alert
                  variant="danger"
                  className={!this.state.loginError ? "hidden" : ""}
                >
                  {this.state.errorMessage || LOGIN_ERROR}
                </Alert>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="outline-dark"
                  type="submit"
                  className="btn-signin"
                  size="lg"
                  block
                >
                  Sign In
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Link to="/register">New to site Create an account</Link>
              </Col>
            </Row>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}
