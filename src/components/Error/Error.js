import './Error.css'
import { Link } from 'react-router-dom';

function Error() {
	return (
		<div className='Error'>
            <h1 className='ErrorH1'>404</h1>
			<div className='ErrorParagraphe'>Oups! La page que vous demandez n'existe pas.</div>
			<Link to="/" className='ErrorLinkBack'>Retourner sur la page d'accueil</Link>
		</div>
	)
}

export default Error