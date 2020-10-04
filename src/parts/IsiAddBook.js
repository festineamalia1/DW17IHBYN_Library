import React from 'react'
import { Col, Form} from "react-bootstrap";
import Button from "elements/Button";
export default function IsiAddBook() {
    return (
        //<div className="container-grid-2">
  //<div class="container-grid-2">
 // <nav>Navbar</nav>
  //<main>Main</main>
  //<div id="sidebar">Sidebar</div>
  <div className="wrapper">
  <div className="item1"></div>
  <div className="item2"><br/></div>
 
  <div className="item3">
  <section className="container">
 <h4 className="mb-5">Add Book</h4>
 <div className="Row">
<Col>
<Form>
<Form.Group controlId="Title">
  
  <Form.Control type="text"
  name="Title"
  required
  placeholder="Title"
  />
  
</Form.Group>
<Form.Group controlId="Publication Date">
  
  <Form.Control type="text"
  name="Publication Date"
  required
  placeholder="Publication Date"
  />
  
</Form.Group>

<Form.Group controlId="Category">
  
  <Form.Control type="text"
  name="Category"
  required
  placeholder="Category"
  />
  
</Form.Group>
<Form.Group controlId="Pages">
  
  <Form.Control type="text"
  name="Pages"
  required
  placeholder="Pages"
  />
  
</Form.Group>
<Form.Group controlId="ISBN">
  
  <Form.Control type="text"
  name="ISBN"
  required
  placeholder="ISBN"
  />
  
</Form.Group>


  <Form.Group controlId="exampleForm.ControlTextarea1">
  
    <Form.Control as="textarea" rows="3"  placeholder="About This Book"/>
  </Form.Group>
  
</Form>
</Col>

</div>
<div><Button className="btn3">
              Attache Book File
            </Button>
</div>
<div><Button className="btn4">Add Book</Button>
</div>
</section>
  </div>
  <div className="item4"><br/><br/></div>
  

  
</div>

    )
}
