
import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Product() {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    const nav=useNavigate();
    const navigateToAddProduct=()=>{

        nav("/AddProduct");
    }
  return (
    <>
      <p>Product</p>
       <Button onClick={navigateToAddProduct}>AddProduct</Button>
       <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <></>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
         </>
  );
}
