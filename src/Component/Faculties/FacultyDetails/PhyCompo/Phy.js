import React from 'react';
import { Container } from 'reactstrap';
import PHYD from "./PHYD"

const Phy=()=>{
const [phyd,setPhyd]=React.useState(PHYD);
// console.log(bcsd);
    return(<>
   <Container>
      <div className="d-flex text-center flex-wrap-wrap mt-3 mb-3" style={{marginLeft:"15px",display:"flex",flexWrap:"wrap"}}>
         {
            phyd.map((props)=>{
               const {img,name, Designation,qulification,contact}=props;
               return(<>
               <div className="d-flex flex-wrap-wrap mb-3" style={{marginLeft:"30px"}}>
               <div className="card " style={{width: "18rem"}}>
                  <img src={img} className="card-img-top  " alt="..."/>
                     <div className="card-body d-flex" style={{backgroundColor:"lightgray",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}>
                        <p className="card-text"><strong>Name:</strong> {name}</p>
                        <p className="card-text"><strong>Qualification:</strong>{qulification}</p>
                        <p className="card-text"><strong> Designation: </strong>{ Designation}</p>
                        <p className="card-text"><strong>Contact No.</strong>{contact}</p>
                     </div>
               </div>
               </div>
               </>)
            })
         }
         </div>
         {/* <h1>HEllo</h1> */}
         {/* <h1>ello</h1> */}
   </Container>
    </>)
}
export default Phy;