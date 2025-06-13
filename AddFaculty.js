import React, { useState } from "react";


function AddFaculty(){
    const [name,setName]=useState("");
const [id,setId]=useState("");
const [email,setEmail]=useState("");
const [econtact,setContact]=useState("");
const [contact,setEContact]=useState("");
const [addr,setAddress] =useState("");
const [photo,setUpload] = useState("");
const [qualification,setQualification]=useState({ssc:false,inter:false,btech:false,mtech:false,phd:false});
const [result,setResult]=useState();
function via(event){
    const {value,checked}=event.target;
    const updateditem ={ ...qualification,[value]: checked};
    setQualification(updateditem);
    let result="";
    if(updateditem.ssc) result+="SSC";
    if(updateditem.inter) result+="Inter";
    if(updateditem.btech) result+="Btech";
    if(updateditem.mtech) result+="Mtec";
    if(updateditem.phd) result+="Phd";
    setResult(result.trim());
}
    return(
        <div>
            <table border="1">
                <tr>
                  <th>Employee Name</th>
                  <th>Employee Id</th>
                <th>Email</th>
                   <th>Econtact</th>
                    <th>Qualification</th>
                    <th>Contact</th>
                     <th>Address</th>
                      <th>Photo Upload</th>

                </tr>
                <tr>
            <td>{name}</td>
            <td>{id}</td>
            <td>{email}</td>
            <td>{econtact}</td>
            <td>{result}</td>
            <td>{contact}</td>
            <td>{addr}</td>
            <td><img src={photo?URL.createObjectURL(photo):""} width="100px"></img></td>
            </tr>
            </table>
            <center>
            <h3>Add New Faculty Details</h3>
            <form>
                <table border="1" rules="all" >
                <tr><td>Employee Name: <input type="text" name="ename" onChange={(event)=>{setName(event.target.value)}}></input></td></tr>
                <tr><td>Employee Id: <input type="text" name="eid" onChange={(event)=>{setId(event.target.value)}}></input></td></tr>
                <tr><td>Email: <input type="email" name="eemail" onChange={(event)=>{setEmail(event.target.value)}}></input></td></tr>
                <tr><td> Econtact: <input type="tel" name="econtact" onChange={(event)=>{setContact(event.target.value)}}></input></td></tr>
                 <tr><td>Employee Qualification: </td></tr>
                 <label>
                 <input type="checkbox" name="qualification" value="ssc" checked={qualification.ssc} onChange={via} />SSC </label><br></br>
                 <label><input type="checkbox" name="qualification" value="Inter" onChange={via}/>Inter</label><br></br>
                 <label><input type="checkbox" name="qualification" value="Btech" onChange={via}/>Btech</label><br></br>
                 <label><input type="checkbox" name="qualification" value="Mtech" onChange={via}/>Mtech</label><br></br>
                 <label><input type="checkbox" name="qualification" value="Phd"  onChange={via}/>Phd</label><br></br>
                 <tr><td>Gender:
                 <input type="radio" name="gender" ></input>Male
                 <input type="radio" name="gender" ></input>Female</td></tr>
                 <tr><td>Contact:<input type="tel" name="contact" onChange={(event)=>{setEContact(event.target.value)}}></input></td></tr>
                 <tr><td>Address:<input type="text" name="addr" onChange={(event)=>{setAddress(event.target.value)}}></input></td></tr>
                 <tr><td>Photo Upload:<input type="file" name="photo" onChange={(e)=>{setUpload(e.target.files[0])}}></input></td></tr>
                <input type="submit" name="submit"value="Save Record" ></input>
                <input type="reset" name="reset" value="reset"></input><br></br>
</table>
            </form>
            </center>
        </div>
    )
}
export default AddFaculty;