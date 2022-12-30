import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React from 'react';

// pour pouvoir renvoyer mes composant à plusieur endroit je vais proceder à un retrun des composant Header .ect
const LayoutDefault = () => {
    return (
         // Renvoie les elements à l'interieur de react Fragment
        <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
        </React.Fragment>
    )
};

export default LayoutDefault;
// Un <Outlet>doit être utilisé dans les éléments de route parents
// pour rendre leurs éléments de route enfants. Cela permet à l'interface utilisateur imbriquée de s'afficher lorsque les itinéraires enfants sont rendus.
