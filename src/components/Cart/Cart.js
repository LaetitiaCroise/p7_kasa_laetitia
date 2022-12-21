import './Cart.css'
import LogementData from '../../data/logement_data.json'
import PartoutKasa from '../../assets/Partout_Kasa.png'
import { Link } from 'react-router-dom';



function Cart() { // je crée ma function Cart qui retourne la section Gallery , la banner background Image et les carts ( gallery images)

    return (
        <section className="Gallery">
            <div className='kasa-Body'>
                <div className="sectionP">
                <p style={{
                backgroundImage: `url(${(PartoutKasa)})`
                }}>Chez vous, partout et ailleurs</p>
                </div>
            </div>
                <div className='galleryImage'>
                    {/* je boucle pour créer une fiche clickable pour chaque id sur logementData et je met un key unique*/}
                    {LogementData.map((l) => (
                    // le <Link> envoie vers la page logement du produit avec le bon ID (/ficheLogement/${l.id})
                    <Link key={l.id} to={`/ficheLogement/${l.id}`}>
                        <div className="boxKey" 
                        // le mets la propriété css pour que l'image (l.cover) soit sur le même plan que le linear-gradient
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                            url(${(l.cover)})`
                        }}>
                            <p className="boxTitre">{l.title}</p>
                        </div>
                    </Link>
                    ))}
                </div>
            </section>
        );
}
export default Cart