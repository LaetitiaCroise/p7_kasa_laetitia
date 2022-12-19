import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutBlank from '../layouts/Blank';
import LayoutDefault from '../layouts/Default';
import Error404 from '../components/Error/Error';
import FicheLogement from '../components/FicheLogement/FicheLogement';
import Slideshow from "../components/FicheLogement/Slideshow";
import Cart from '../components/Cart/Cart'
import APropos from '../components/aPropos/APropos'

// Création du router 
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<LayoutDefault />}>
                    <Route path="/" element={<Cart />} />
                    <Route path="/ficheLogement/:id" element=
                    {
                        <>
                            <Slideshow />
                            <FicheLogement />
                        </>
                    } 
                    />
                    <Route path="/aPropos" element={<APropos />} />
                </Route>

                <Route element={<LayoutBlank/>}>
                    <Route path="*" element={<Error404/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default Router;



/*
import {Routes, Route} from "react-router-dom"
import Header from './Header/Header'
import Cart from './Cart'
import Error from './Error/Error'
import APropos from './aPropos/APropos'
import Slideshow from './FicheLogement/Slideshow'
import Footer from './Footer/Footer'
import FicheLogement from './FicheLogement/FicheLogement'

*/