import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Buttons from 'react-bootstrap/Button'
import "./Form.css";
import Form from 'react-bootstrap/Form'


class Forms extends React.Component {

 form() {
 
  }

render (){
    return (
        <div className="form-row">
           <Form.Control type="text" placeholder="Enter ZipCode" />
        </div> 
            );
}

}
  
  export default Forms;