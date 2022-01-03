import React from 'react';
import {Form,Row,Col,FormGroup,Input,Label ,Button,Container,Card} from "reactstrap"
const  Contact =()=>{

    return(<>
    <Container>
        <Card >
    <h1 clssName="text-center" style={{fontFamily:"ubuntu",textAlign:"center",fontWeight:"bold"}}>Contact Us</h1>
            <Card>
              <Card className="mb-2 bg-primary">
             
              </Card>
  <Card className="mt-3">
    <Form >
  <Row form>
  <Col md={6}>
      <FormGroup className="w-75">
        <Input  id="exampleEmail"  name="email"  placeholder="Name"  type="email" />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Input  id="exampleEmail"  name="email"  placeholder="@Example.com"  type="email" />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Input  id="exampleAddress" className="w-50" name="address1"  placeholder="Address"/>
  </FormGroup>
  <FormGroup>
    <Input  id="exampleAddress2"  className="w-50" name="address2"  placeholder="Permanent Address" />
  </FormGroup>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Input id="exampleCity"  name="city" placeholder="City" />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Input  id="exampleState"  name="state"  placeholder="State"/>
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Input type="number" id="exampleZip"  name="zipCode" placeholder="ZipCode"/>
      </FormGroup>
    </Col>
  </Row>
  <div class="mb-3">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comments"/>
  </div>

  <Button>Send</Button>
</Form>
</Card>
</Card>
</Card>
</Container>
    </>)
}
export default Contact;