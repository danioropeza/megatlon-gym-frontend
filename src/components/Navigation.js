import React from 'react'; 
import { NavLink } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Navigation = () => (
    <div class="ui menu" >
        <NavLink class="item" to="/" > Home </NavLink>
        <NavLink class="item" to="/about" > About </NavLink>
        <NavLink class="item" to="/contact" > Contact </NavLink>
        <NavLink class="item" to="/schedule" > Schedule </NavLink>
        <NavLink class="item" to="/address" > Address </NavLink>
    </div>
)

export default Navigation;