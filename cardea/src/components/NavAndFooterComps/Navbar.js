import React from "react";
import {useHistory} from "react-router-dom";

const Navbar = () =>{
    const history = useHistory();

    return (
        <nav style={{display: "flex"}}>
            <button onClick={(e) => {
                e.preventDefault();
                localStorage.clear();
                history.push("/")
                }}>Log Out</button>
        </nav>
    )
}

export default Navbar;