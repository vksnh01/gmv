import React from 'react';
// import Navbar from "./NaviComponent/Navbar"
import Navbar from '../NaviComponent/Navbar'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AllCompFileD from "./AllCompFileD"


const AllCompFile =()=>{
  const [CFItem,setCFItem]=React.useState(AllCompFileD);

    return(<>
    <Router>
    <Navbar />
  <Routes>
    {
      CFItem.map((elem)=>{
              const {path,id,link}=elem;
              return(<>
              <Route key={id} exact path={`/${path}`} element={link} />
              </>)})
      }
  </Routes>
</Router>

    </>)
}
export default AllCompFile;