import './collapse.css'
import { useState } from "react";
import React from "react";
const chevron = <i className="fa-solid fa-chevron-up"></i>;

//je créé ma fonction Accordion_Logement et lui passe en paramètre les props title, content, about qui sont défini dans FicheLogement.js
function Collapse({ title, content, about }) {

    //je créé une variable d'état 'isActive' associé avec setActive et avec userstate l'initialise à false
    const [isActive, setActive] = useState(false);

// je crée l'evements synthétique égale à event je lui passe ma variable d'état 
    const handleToggle = (evnt) => {
    setActive(!isActive);
    };
    return (
    <div className={`${ about ? "about-collapse-container " : "collapse-container"  } ${isActive && "active"}`}>
        
        <div className="accordionTitle" onClick={handleToggle}> 
            {title} <div>{chevron}</div>
        </div>
        <div className="accordionContent">{content}</div>
    </div>
    );
}

export default Collapse;

// Il est important de préciser une valeur initiale dans votre state ça peut etre une string, un booléen, un tableau ou encore un objet avec plusieurs propriétés.
// Sinon, elle sera undefined par défaut


