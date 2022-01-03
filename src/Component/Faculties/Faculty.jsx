import React from 'react';
import {Row,Col,Container,Card} from "reactstrap";
import BCS from "./FacultyDetails/BCSCompnent/BCS.js"


const Faculty =()=>{

    return(
        <>
        <Container>
         <Row> 
        <div className="text-center w-100"><h1>Facultiy of Gochar MahaVidhyalya</h1></div>
 <Col md={4} className="card text-center"> <h1>Faculties Name</h1>             
 <p>
     <Card>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Faculty of Computer Department</a>
  <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Faculty of Agriculture Department</a>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
     </Card>
 </p>
 </Col>
 <Col md={8} className="card text-center" style={{backgroundColor:"bisque"}}><h1>Faculty Details</h1>
                       
<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
       {<BCS />}
    </div>
    </div>
  </div>
</div>
       </Col>
            </Row>
        </Container>
        </>
         )
}
export default Faculty;