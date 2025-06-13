import React,{useState} from "react";
function AddStudent(){
    const [name,setName2]=useState("");
    const [id,setId]=useState("");
    const [semail,setEmail]=useState("");
    const [erank,setRank]=useState("");
    const [Econtact,setContact]=useState("");
    const [contact,setEContact]=useState("");
    const [addr,setAddress] =useState("");
    const [photo,setUpload] = useState("");

    return(
        <div><table border="1">
                <tr>
                  <th>Student Name</th>
                  <th>Student Id</th>
                <th>Email</th>
                <th>Eamcet Rank</th>
                   <th>Scontact</th>
                    <th>Contact</th>
                     <th>Address</th>
                      <th>Photo Upload</th>

                </tr>
                <tr>
            <td>{name}</td>
            <td>{id}</td>
            <td>{semail}</td>
            <td>{erank}</td>
            <td>{Econtact}</td>
            <td>{contact}</td>
            <td>{addr}</td>
            <td><img src={photo?URL.createObjectURL(photo):""} width="100px"></img></td>
            </tr>
            </table>
            <center>
            <h3>Add New Student Details</h3>
            <form>
                Student Name: <input type="text" name="sname" onChange={(event)=>{setName2(event.target.value)}}></input><br></br>
                Student Id: <input type="text" name="sid" onChange={(event)=>{setId(event.target.value)}}></input><br></br>
                Email: <input type="email" name="semail" onChange={(event)=>{setEmail(event.target.value)}}></input><br></br>
                 Scontact: <input type="tel" name="scontact" onChange={(event)=>{setContact(event.target.value)}}></input><br></br>
                 Eamcet Rank: 
                 <input type="tel" name="study" onChange={(event)=>{setRank(event.target.value)}}></input><br></br>
                 Gender:<br></br>
                 <input type="radio" name="gender"></input>Male
                 <input type="radio" name="gender"></input>Female<br></br>
                 Contact:<input type="tel" name="contact" onChange={(event)=>{setEContact(event.target.value)}}></input><br></br>
                 Address:<input type="text" name="addr" onChange={(event)=>{setAddress(event.target.value)}}></input><br></br>
                 Photo Upload:<input type="file" name="photo" onChange={(e)=>{setUpload(e.target.files[0])}}></input><br></br>
                <input type="submit" name="submit"value="Save Record"></input>
                <input type="reset" name="reset" value="reset"></input><br></br>
            </form>
            </center>
        </div>
    )
}
export default AddStudent;