import React from "react";
function Clgdetails(){
    return(
        <div>
            Courses Offered:
            <ol>
                <li>CSE</li>
                <li>CSM</li>
                <li>CSN</li>
                <li>ECE</li>
                <li>CSO</li>
                <li>CIVIL</li>
            </ol>
            <form>
            Student Intake:
            <input type="checkbox"></input>CSE
            <input type="checkbox"></input>CSM
            <input type="checkbox"></input>CSN
            <input type="checkbox"></input>CSO
            <input type="checkbox"></input>ECE
            <input type="checkbox"></input>CIVIL<br></br>
            <input type="submit"></input>
            </form>
        </div>
    )
}
export default Clgdetails;