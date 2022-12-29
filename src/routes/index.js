import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutBlank from '../layouts/Blank';
import LayoutDefault from '../layouts/Default';
import Error404 from '../components/Error/Error';
import FicheLogement from '../components/FicheLogement/FicheLogement';
import Slideshow from "../components/FicheLogement/Slideshow";
import Cart from '../components/Cart/Cards'
import APropos from '../components/aPropos/APropos'
import React from "react";

// Découpage du router 
const Router = () => {
    return (
        //  je gere le rendu avec BrowserRouter et Route pour l'affichage de mes differentes pages
        <BrowserRouter> 
            <Routes>

                <Route element={<LayoutDefault />}>
                    <Route path="/" element={<Cart />} />
                    <Route path="/ficheLogement/:id" element=
                    {
                        <React.Fragment>
                            <Slideshow />
                            <FicheLogement />
                        </React.Fragment>
                    } 
                    />
                    <Route path="/aPropos" element={<APropos />} />
                </Route>
                
                <Route element={<LayoutBlank />}>
                    <Route path="*" element={<Error404 />}/>
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default Router;

// BrowserRouter element principal pour le router 