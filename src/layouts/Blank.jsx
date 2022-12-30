import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'

const LayoutError = () => {
    return (
        // Renvoie deux elements à l'interieur de react Fragment
        <React.Fragment>
        <Header/>
            <Outlet />
        </React.Fragment>
    );
};

export default LayoutError;

// Un <Outlet>doit être utilisé dans les éléments de route parents
// pour rendre leurs éléments de route enfants. Cela permet à l'interface utilisateur imbriquée de s'afficher lorsque les itinéraires enfants sont rendus.

// Outlet Cette bibliothèque fournit un composant de sortie de routeur qui modifie dynamiquement
// le contenu en fonction de la route actuelle. Il s'agit d'un remplacement pratique pour la combinaison de et de composants de React Router <Switch>