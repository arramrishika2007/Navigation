import React from "react";
function Login(){
    return(
        <div>
            <form>
            Username: <input type="email" name="smail"></input><br></br>
            Password: <input type="password" name="pass"></input><br></br>
            Role: <input type="text" name="role"></input><br></br>
            <input type="submit" name="submit"></input><br></br>
            </form>
        </div>
    )
}
export default Login;