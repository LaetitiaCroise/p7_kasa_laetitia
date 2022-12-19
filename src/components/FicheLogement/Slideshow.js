import './Slideshow.css'
import React, {useEffect, useState} from 'react'
import data from '../../data/logement_data'
import {useParams} from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


function Slideshow() {

////////////////////SET-LOGEMENT (logement aurait pu être en params de Slideshow)////////////////////
    const [logement, setLogement] = useState({ 
        tags: [],
        equipments: [], 
        pictures: [], 
        rating: '', 
        host: { 'name': '', 'picture': '' } 
    })
    const { id } = useParams()
    
    useEffect(() => {
        data.map((house) => {
            if (house.id === id) {
                setLogement(house)
            }
            return null
        })
    }, [id])

////////////////////CURRENT-IMAGE////////////////////

    const [current, setCurrent] = useState(0)
    const length = logement.pictures.length

    //je prépare mes constantes pour le onClick des chevrons
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current +1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    if(logement.pictures.length <= 0) {
        return null
    }

    //variable chevronOrNot pour afficher ou non les chevrons et le compteur en fonction du nombre d'image
    let chevronOrNot = "arrow";
    let slideNumberOrNot = "slideNumber"

    if(logement.pictures.length === 1) {
        chevronOrNot = "maybeHide"
        slideNumberOrNot = "maybeHide"
    }


////////////////////RETURN////////////////////
    return (
        <section className='sectionSlider'>
                
            <div className='slider'>
                {/* je boucle sur les photos du logement pour afficher l'image avec l'index qui équivault à current */}
            {logement.pictures.map((l, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        <div className="imageSlider" 
                            style={{
                                backgroundImage: `url(${(logement.pictures[index])})`
                            }}>
                                <FiChevronLeft className={chevronOrNot} onClick={prevSlide}/>
                                {index=== current && (
                                    <span className={slideNumberOrNot}>
                                        {current +1}/{length}
                                    </span>
                                )}
                                <FiChevronRight className={chevronOrNot} onClick={nextSlide}/>
                        </div>
                        )}
                    </div>
                )
            })}
            </div>
        </section>
    )
}
export default Slideshow