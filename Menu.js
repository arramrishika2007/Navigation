import React from "react";
import{Link,Route,Routes,BrowserRouter} from "react-router-dom"
import AddFaculty from "./AddFaculty";
import AddStudent from "./AddStudent";
import DelFaculty from "./DelFaculty";
import DelStudent from "./5/25/DelStudent";
import Login from "./Login";
import GetFaculty from "./GetFaculty";
import GetStudent from "./GetStudent";
import Clgdetails from "./Clgdetails";


function Menu(){
    return(
        <BrowserRouter>
        <div className="Menu">
            <div>Home</div>
             <div className="Faculty">Faculty
             <div className="faculty2">
                <div><Link to="/AddFaculty">Add Faculty</Link></div>
                <div><Link to="/DelFaculty">Delete Faculty</Link></div>
                <div><Link to="/GetFaculty">Get Faculty Details</Link></div>
             </div>
             </div>
              <div className="student">Student
                <div className="student2">
               <div><Link to="/AddStudent">Add Student</Link></div>
                <div><Link to="/DelStudent">Delete Student</Link></div>
                <div><Link to="/GetStudent">Get Student Details</Link></div>
             </div>
              </div>
               <div>Contact</div>
                <div className="about">About
                    <div className="about2">
                <div><Link to="/Clgdetails">Clg</Link></div>
                <div><Link to="/DeptDetails">Department</Link></div>
             </div>
                </div>
                 <div><Link to="/Login">Login</Link></div>
                 </div>
                 <Routes>
          <Route path="/AddFaculty" element={<AddFaculty />}></Route>
           <Route path="/AddStudent" element={<AddStudent />}></Route>
           <Route path="/DelFaculty" element={<DelFaculty />}></Route>
            <Route path="/DelStudent" element={<DelStudent />}></Route>
             <Route path="/Login" element= {<Login />}></Route>
             <Route path="/GetFaculty" element={<GetFaculty />}></Route>
              <Route path="/GetStudent" element={<GetStudent />}></Route>
              <Route path="/Clgdetails" element={<Clgdetails />}></Route>
          {/* 
          <Route path="/DeptDetails" element={<DeptDetails />}></Route> */}
        </Routes>
                 </BrowserRouter>
    )
}
export default Menu;