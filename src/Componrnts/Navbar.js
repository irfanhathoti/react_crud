import React from "react";
import { Link } from "react-router-dom";


const Navbar = () =>{
    return(
        <div>
            <Link to='/' > DashBoard  </Link>
            <Link to="/AddData">Add Data</Link>
        </div>
    )
}

export default Navbar