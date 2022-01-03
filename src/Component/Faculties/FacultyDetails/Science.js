import React,{useState} from "react";
import {Container,Row,Col,Card} from "reactstrap"
import DepartmentDetail from "./DEPARTMENTDETAIL/DepartmentDetail"

const Science = ()=>{
   const [left,setLeft]=useState(DepartmentDetail);
return(<>
    return(<>
    <Container className="container">
   <Card className="card">
 <Row className="text-center accordion accordion-flush row" id="accordionFlushExample" >
      <Col md={3} className="mt-2 mb-2">
         <Card className="card">
            <h1>Department</h1>
            { left.map((elem)=>{
                    console.log(elem.id)
                    const {id,name}=elem;
                    return(<>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id={`flush-heading${id}`}>
                       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${id}`} aria-expanded="false" aria-controls={`flush-collapse${id}`}>
                        {name}
                       </button>
                    </h2>
                 </div>
                 </>)
                })}
         </Card>
      </Col>   

      <Col md={9} >
         <Card>
         <h1>Department Details</h1>
             {
                 left.map((element)=>{
                    const {name,value,id}=element;
                    return(<>
                      <div className="accordion-item">
               <div id={`flush-collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${id}`} data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                     <h3>{name}</h3>
                     {value}
                  </div>
                </div> 
            </div>  
                    </>)})}
         </Card>
      </Col>
 </Row>
   </Card>
</Container>
    
    </>)
</>)      
}
export default Science;