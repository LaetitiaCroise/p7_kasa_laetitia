import "./Slideshow.css";
import React, { useEffect, useState } from "react";
import data from "../../data/logement_data";
// j'utilise le snippets de code qui combine mes parametre passées dans l'url
import { useParams } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// je créé ma fonction FicheLogement et récupère toutes les information du json à partir de l'id qui est dans l'URL avec useParams
function Slideshow() {
    const [logement, setLogement] = useState({ 
        tags: [],
        equipments: [],
        pictures: [],
        rating: "",
        host: { name: "", picture: "" },
        });
        const { id } = useParams();
    
        // j'excute avec useEffect le code une fois que le site va être charger 
        useEffect(() => { 
        data.map((house) => {  // je boucle ma data pour obtenir house 
            if (house.id === id) { // je passe la conditions  si id de house est strictement egale à l'id de mon parametre Use params
            setLogement(house);// si c'est ok setLogement( useState) recupère toute les données de house
            }
            return null;
        });
        }, [id]); // garde en paramettre l'id 
  

  ////////CURRENT-IMAGE//////////
// get (current), set (setCurrent) pour set le states 
  const [current, setCurrent] = useState(0); // syntaxe de destructuration qui determine la position de default value de la photo qui est affichée
  const length = logement.pictures.length;  // determine la longeur du tableau d'image

  // Lorsque je clique sur le buton image suivante , si je suis à  la fin du tableau d'image je repasse mon index à zero, sinon index = index actuel + 1 
  const nextSlide = () => { 
    setCurrent(current === length - 1 ? 0 : current + 1);  
  };
  //je prépare mes constantes pour que chaque onClick des chevrons prevSlide -1 pour le retour
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // si pas d'image sur le logement alors il est null
  if (logement.pictures.length <= 0) {
    return null;
  }

  // par défaut les chevrons sont visibles avec la classe arrow 
  let chevronOrNot = "arrow";
  let slideNumberOrNot = "slideNumber";

  // il n'y a qu'une seule image , les flèches seront masquées avec la classe maybeHide ( en remplacement de 'arrow')
  if (logement.pictures.length === 1) {
    chevronOrNot = "maybeHide";
    slideNumberOrNot = "maybeHide";
  }

  ////////////////////RETURN////////////////////
  return (
    <section className="sectionSlider">
      <div className="slider">
        {/* je boucle avec map sur les photos du logement pour afficher l'image avec l'index qui équivault à current */}
        {logement.pictures.map((l, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div
                  className="imageSlider"
                  style={{
                    backgroundImage: `url(${logement.pictures[index]})`,
                  }}
                >
                  <FiChevronLeft className={chevronOrNot} onClick={prevSlide} />
                  {index === current && (
                    <span className={slideNumberOrNot}>
                      {current + 1}/{length}
                    </span>
                  )}
                  <FiChevronRight
                    className={chevronOrNot}
                    onClick={nextSlide}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Slideshow;
