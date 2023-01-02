import './Cards.css'
import LogementData from '../../data/logement_data.json'
import PartoutKasa from '../../assets/Partout_Kasa.png'
import { Link } from 'react-router-dom';


// mettre à jour cart en cards
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
                    {/* je boucle avec map pour créer une fiche cliquable pour chaque id sur logementData et je met un key unique*/}
                    {LogementData.map((logement) => (
                    // le <Link> envoie vers la page logement du produit avec le bon ID coresspondant au logement en question (/ficheLogement/${logement.id})
                    <Link key={logement.id} to={`/ficheLogement/${logement.id}`}>

                        <div className="boxKey" 
                        // le mets la propriété css dynamique pour que l'image (logement.cover) soit sur le même plan que le linear-gradient
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                            url(${(logement.cover)})`
                        }}>
                            <p className="boxTitre">{logement.title}</p>
                        </div>
                    </Link>
                    ))}
                </div>
            </section>
        );
}
export default Cart