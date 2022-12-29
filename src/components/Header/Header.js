import './Header.css'
import logoKasa from '../../assets/logo_Kasa.png'
import { Link } from 'react-router-dom'


function Banner() {
	return (
		<header className='kasaBanner'>
			<Link to="/">
				<img src={logoKasa} alt='logo de Kasa' className='logoKasa' />
			</Link>
			<ul className='HeaderMenu'>
				<Link to="/" title='redirection page d accueil'><span>Accueil</span></Link>
				<Link to="/Apropos"><span className='Border'>A Propos</span></Link>
			</ul>
		</header>
	)
}

export default Banner

// J'utilise un Link qui viens de react Router et permet de définir mes routes 
// 
