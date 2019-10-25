import React from "react";
import {useHistory} from "react-router-dom";

const Navbar = (props) =>{
    const history = useHistory();
    console.log(props);
    return (
        <nav style={{display: "flex"}}>
            <button onClick={(e) => {
                e.preventDefault();
                localStorage.clear();
                history.push("/")
                }}>Log Out</button>
            {localStorage.getItem("med_id") ? <h3>Welcome, {`${props.info[0].medicFirstName}`}!!</h3> : <h3>Welcome, {`${props.info[0].firstName}`}!!</h3>}
        </nav>
    )
}

export default Navbar;

