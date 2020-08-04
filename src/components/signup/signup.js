import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "./signup.css";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const SIGNUP_SUCCESS = "Signup successful.";

const SIGNUP_ERROR = "Please try again later.";

const MAX_DATE = "2010-12-31";

const MIN_DATE = "1979-12-31";

export default class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hiddenPassword: true,
      signupSuccess: false,
      signupError: false,
      firstName: "",
      lastName: "",
      dob: "",
      mobile: "",
    };
  }

  render() {
    const hideiconstyle = this.state.hiddenPassword ? { display: "none" } : {};
    const showiconstyle = !this.state.hiddenPassword ? { display: "none" } : {};

    return (
      <React.Fragment>
        <Container>
          <form
            className="signup-form"
            onSubmit={this.submitSignUpRequest}
            noValidate
          >
            <Row>
              <Col>
                <h3>Sign Up</h3>
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formSignUpFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide First Name
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formSignUpLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide Last Name
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formSignUpEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formSignUpPassword">
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
                <Form.Group controlId="formSignUpDob">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control
                    placeholder=""
                    type="date"
                    min={MIN_DATE}
                    max={MAX_DATE}
                    required
                  />
                  {/* <Form.Control placeholder="" type="date" onChange={this.handleDobChange} max={this.state.maxDate} min={this.state.minDate} required /> */}
                  <div className="invalid-feedback">
                    Please select Date of Birth
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formSignUpMobile">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    placeholder="Contact Number"
                    type="text"
                    pattern="[0-9]+"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your contact number
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Alert
                  variant="success"
                  className={!this.state.signupSuccess ? "hidden" : ""}
                >
                  {this.state.signupSuccess || SIGNUP_SUCCESS}
                </Alert>
                <Alert
                  variant="danger"
                  className={!this.state.signupError ? "hidden" : ""}
                >
                  {this.state.errorMessage || SIGNUP_ERROR}
                </Alert>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="outline-dark"
                  type="submit"
                  className="btn-signup"
                  size="lg"
                  block
                >
                  Sign Up
                </Button>
                <Row>
                  <Col>
                    <Link to="/Login">Already a member</Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}
