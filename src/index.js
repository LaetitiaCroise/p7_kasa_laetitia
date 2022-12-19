
import React from 'react';
import './styles/index.css'
import App from './components/App'

// // importation  de la méthode {createRoot} avec react dom/client
// import { createRoot } from 'react-dom/client';

// //recupère le rootElement dans 'root'
// const rootElement = document.getElementById('root');

// // création de la const root = createRoot pour rootElement
// const root = createRoot(rootElement);

// // renvoie à l'interieur du 'root' le composant <App/>
// root.render(
// 		<App />
// )
// // createRoot()contrôle le contenu du nœud de conteneur que vous transmettez. 
// //Tous les éléments DOM existants à l'intérieur sont remplacés lorsque render est appelé. 
// //Les appels ultérieurs utilisent l'algorithme de différenciation DOM de React pour des mises à jour efficaces.
 ReactDOM.render(<App/>, document.getElementById('root'));