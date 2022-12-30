import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header'

const LayoutError = () => {
    return (
        <>
        <Header/>
            <Outlet />
        </>
    );
};

export default LayoutError;

// Un <Outlet>doit être utilisé dans les éléments de route parents
// pour rendre leurs éléments de route enfants. Cela permet à l'interface utilisateur imbriquée de s'afficher lorsque les itinéraires enfants sont rendus.