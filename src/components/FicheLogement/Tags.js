import React from 'react';

//je prépage ma fonction Tag pour l'importer dans FicheLogement
function Tag({ logement }) {

    const tag = logement.tags;
    const tagMap = tag.map((evnt, index) => (

        <p className="tagParagraphe" key={evnt}>{logement.tags[index]}</p> //recupere l'index de tag
    ));
    return <div className="tag">{tagMap}</div>;
}

export default Tag;

