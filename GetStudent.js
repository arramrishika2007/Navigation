import React from "react";
function GetStudent(){
    return(
        <div>
            <form>
            Student Id: <input type="text" name="sid"></input><br></br>
            <button type="button" name="Search">Search</button>
            </form>
        </div>
    )
}
export default GetStudent;