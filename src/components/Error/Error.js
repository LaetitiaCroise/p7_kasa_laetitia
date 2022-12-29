import './Error.css'
import { Link } from 'react-router-dom';

function Error() {
	return (
		<section className='Error'>
            <h1 className='ErrorH1'>404</h1>
			<p className='ErrorParagraphe'>Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className='ErrorLinkBack'>Retourner sur la page d'accueil</Link>
		
		</section>
	)
}

export default Error

// <Link>est un élément qui permet à l'utilisateur de naviguer vers une autre page en cliquant ou en appuyant dessus.
