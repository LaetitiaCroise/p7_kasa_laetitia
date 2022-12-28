import './Header.css'
import logoKasa from '../../assets/logo_Kasa.png'
import { Link } from 'react-router-dom'


function Banner() {
	return (
		<div className='kasaBanner'>
			<Link to="/">
				<img src={logoKasa} alt='logo de Kasa' className='logoKasa' />
			</Link>
			<ul className='HeaderMenu'>
				<Link to="/"><span>Accueil</span></Link>
				<Link to="/Apropos"><span className='Border'>A Propos</span></Link>
			</ul>
		</div>
	)
}

export default Banner
// J'utilise un Link qui viens de react Router  et se comporte comme une Balise anchor qui va permettre de faire le lien entre les pages   (important pour l'accesibilité)
