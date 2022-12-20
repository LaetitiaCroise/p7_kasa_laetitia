import React from "react";
import Star from '../../assets/Star.png'
import StarEmpty from '../../assets/StarEmpty.png';

// je récupère les props en créant la fonction  Rate avec en paramètre "logement" pour récuperer ensuite son ratonScore allant de 1 à 5 (étoiles)
function Rate({ logement }) {
const ratingScore = [1, 2, 3, 4, 5]
return (
    <div>
            {/* je boucle  sur mon ratingScore, tant que la condition est positive, alors les étoile sont pleine, sinon, elles sont vide */}
            
            {ratingScore.map((ratingElem) => // Je passe chaque élement du tableau avec map pour retourné le résultat (ratingElem)
            
                logement >= ratingElem ? (//  j'attribue la valeur de objet  entre les accolade {ratingElem.toString}
                    <img 
                        src={Star} 
                        key={ratingElem.toString()} 
                        alt='étoile rempli' 
                    />
                ) : (
                    <img 
                        src={StarEmpty} 
                        key={ratingElem.toString()} 
                        alt='étoile vide'
                    />
                )
            )}
        </div>
)
}

export default Rate;