import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Button.css";
import Form from "../Form/Form.js";

class Button extends React.Component {

Button() {
 
}

render () {
   return (
    <div>
        <Button as="input" type="submit" value="Search" variant="success" className="button" size="lg"/>{" "}
    </div>
  );
}

}
export default Button;
