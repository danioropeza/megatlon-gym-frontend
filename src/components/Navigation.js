import React from 'react'; 
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Navigation = () => (
    <div className="ui menu" >
        <Link className="item" to="/"> Home </Link>
        <Link className="item" to="/login" > Login </Link>
        <Link className="item" to="/register" > Register </Link>
        <Link className="item" to="/plans" > Plans </Link>
        <Link className="item" to="/schedule" > Schedule </Link>
        <Link className="item" to="/about" > About </Link>
    </div>
)

export default Navigation;