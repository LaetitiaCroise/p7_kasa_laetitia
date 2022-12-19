import './Accordion.css'
import { useState } from "react";
import React from "react";
const chevron = <i className="fa-solid fa-chevron-up"></i>;

//je créé ma fonction Accordion et lui glisse en paramètre title et content, qui sont défini dans APropos.js
function Accordion({ title, content }) {
  //useState est false initialement
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    // Si "active" est différent de false, la classe s'active
    setActive(!active);
  };
  return (
    //si active est vrai, la classe est active
    <div className={`accordion ${active && "active"}`}>
      <div className="accordionTitle" onClick={handleToggle}>
        {title} <div>{chevron}</div>
      </div>
      <div className="accordionContent">{content}</div>
    </div>
  );
}

export default Accordion;