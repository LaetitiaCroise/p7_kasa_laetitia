import './Footer.css'
import logo_Kasa from '../../assets/logo_Kasa.png'

function Footer() {
	return (
		<footer className='kasa-Footer'>
			<img src={logo_Kasa} alt='logo de Kasa' className='logo_Kasa_Footer' />
			<div className='kasa-footer-elem'>© 2020 Kasa. All rights reserved</div>
		</footer>
	)
}

export default Footer