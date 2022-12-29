import React from 'react';


//je prépage ma fonction Tag pour l'importer dans FicheLogement

function Tag({ logement }) {
    return (
        <div className="tag">
            <p className="tag-content">{logement.content}</p>
        </div>
    )
}
export default Tag