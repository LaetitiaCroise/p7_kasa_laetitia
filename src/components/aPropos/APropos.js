import './aPropos.css'
import Accordion from './Accordion';
import React from 'react';

function A_propos() { // je crée ma fonction qui va retournée des Fragments pour mon composant A_ProposKasa et accordions qui va me permettre
	//de grouper une liste d'enfants sans ajouter de noeud supplémentaire dans le DOM
	return (
	<React.Fragment>
		<div className='aProposKasa'>
			
		</div>
		<main className="accordions">
		<Accordion
			title="Fiabilité"
			content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
		/>
		<Accordion
			title="Respect"
			content="La bienveillance fais partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
		/>
		<Accordion
			title="Service"
			content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
		/>
		<Accordion
			title="Responsabilité"
			content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		/>
		</main>
		</React.Fragment>
	);
}

export default A_propos;