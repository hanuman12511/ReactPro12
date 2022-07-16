import React, {useState} from 'react';

import {Button,Modal,Form} from 'react-bootstrap';
export default function AddProduct() {
  const [fname , setFName] = useState();
  const [lname , setLName] = useState();
  const [email , setEmail] = useState();

const inputsHandlerName = (e) =>{
  console.log(e.target.value)
  setFName( {fname: e.target.value} )
}

const submitButton = () =>{
  console.log(inputField.gmail)
   alert(inputField)
   setInputField( {[target.name]: ""} )
}
  return (
    <div >
        <Form.Control 
            type="text" 
            name="first_name" 
            onChange={inputsHandler} 
            placeholder="First Name" 
            value={inputField.first_name}/><br/>

<Form.Control 
type="text" 
name="last_name" 
onChange={inputsHandler} 
placeholder="First Name" 
value={inputField.last_name}/>

<br/>

<Form.Control
type="gmail" 
name="gmail" 
onChange={inputsHandler} 
placeholder="Gmail" 
value={inputField.gmail}/>

<br/>

<Button onClick={submitButton} >Submit Now</Button>

    </div>
  );
}
