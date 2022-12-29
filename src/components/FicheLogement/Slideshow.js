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
  // je configure la constante avec les datas qui ont le même id que dans l'URL
  useEffect(() => {
    // // récupère les datas et les tranforme en liste de composant (id) dans un tableau
    data.map((house) => {
      if (house.id === id) {
        setLogement(house);
      }
      return null;
    });
  }, [id]);

  ////////CURRENT-IMAGE//////////

  const [current, setCurrent] = useState(0);
  const length = logement.pictures.length;

  //je prépare mes constantes pour que chaque onClick des chevrons nextSlide +1
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  //je prépare mes constantes pour que chaque onClick des chevrons prevSlide -1 pour le retour
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // si aucun clique il ne se passe rien
  if (logement.pictures.length <= 0) {
    return null;
  }

  //variable chevronOrNot pour afficher ou non les chevrons et le compteur en fonction du nombre d'image
  let chevronOrNot = "arrow";
  let slideNumberOrNot = "slideNumber";

  if (logement.pictures.length === 1) {
    chevronOrNot = "maybeHide";
    slideNumberOrNot = "maybeHide";
  }

  ////////////////////RETURN////////////////////
  return (
    <section className="sectionSlider">
      <div className="slider">
        {/* je boucle sur les photos du logement pour afficher l'image avec l'index qui équivault à current */}
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
