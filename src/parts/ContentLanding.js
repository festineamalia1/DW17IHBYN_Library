import React,{useState} from 'react'
import Icon from 'assets/images/Icon.png'
import SideGround from 'assets/images/Sideground.png'
import Button from "elements/Button";


import {Modal, Col, Row, Form} from "react-bootstrap";


export default function ContentLanding() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);


    return (
        <div>
            <div>
 <img className= "side-ground" src={SideGround} alt="side-ground"/>
 </div>
    <div className="container">
        <img className="lib-icon" src={Icon} alt="lib-iconic" />
      
    </div>
   
    <div className="container">
 <div className="row" >
 <h1>
  Your  </h1> <span>library</span> 
  <h2> anywhere</h2>
  
     <p>Sign-up today and receive unlimited
accesss to all of your reading - share
your book.</p>
<Button
className="btn1"
hasShadow
controlId="up"
onClick={() => setSmShow(true)}
>
  Sign Up
</Button>
            <Button
              className="btn2"
              hasShadow
              isLight
              onClick={() => setLgShow(true)}
              controlId="in"
            >
              Sign in
            </Button>
           
            <Modal
        //size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col>
        <Form>
        <Form.Group controlId="Email">
             
             <Form.Control type="text"
             name="Email"
             required
             placeholder="Email"
             />
             
           </Form.Group>
           <Form.Group controlId="Password">
             
             <Form.Control type="password"
             name="Password"
             required
             placeholder="Password"
             />
             
           </Form.Group>

           <Form.Group controlId="FullName">
             
             <Form.Control type="text"
             name="Full Name"
             required
             placeholder="Full Name"
             />
             
           </Form.Group>
           <Form.Group controlId="Gender">
             
             <Form.Control as="select"
            defaultValue="Choose">
              <option>Gender</option>
              <option>Female</option>
              <option>Male</option>
              </Form.Control>
           </Form.Group>
           <Form.Group>
           <Form.Control type="text"
             name="Phone"
             required
             placeholder="Phone"
             />
             </Form.Group>
             <Form.Group>
              <Form.Control type="text"
             name="Address"
             required
             placeholder="Address"
             />
             </Form.Group>
        </Form>
        </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
      <Button className="signbtn">
                    Sign Up
                  </Button>
      </Modal.Footer>
      </Modal>
      <Modal
        //size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Sign In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col>
        <Form>
        <Form.Group controlId="Email">
             
             <Form.Control type="text"
             name="Email"
             required
             placeholder="Email"
             />
             
           </Form.Group>
           <Form.Group controlId="Password">
             
             <Form.Control type="password"
             name="Password"
             required
             placeholder="Password"
             />
             
           </Form.Group>
        </Form>
        </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
      <Button className="signbtn">
                    Sign In
                  </Button>
      </Modal.Footer>
      </Modal>
            
           
 </div>
 
 </div>
 
 </div>


    )
}
