import React from 'react'; 
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

const Navigation = () => (
    <div className="ui centered grid">
        <div className="center aligned column">
            <div className="ui inverted menu">
                <Link className="item" to="/"><Icon name="home" /> Home </Link>
                <Link className="item" to="/login" ><Icon name="sign in alternate" /> Login </Link>
                <Link className="item" to="/register" ><Icon name="edit" /> Registro </Link>
                <Link className="item" to="/plans" ><Icon name="clipboard list" /> Planes </Link>
                <Link className="item" to="/schedule" ><Icon name="calendar alternate" /> Horarios </Link>
                <Link className="item" to="/about" ><Icon name="question circle outline" /> Acerca de </Link>
            </div>
        </div>
    </div>
)
export default Navigation;