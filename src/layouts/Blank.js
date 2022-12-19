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