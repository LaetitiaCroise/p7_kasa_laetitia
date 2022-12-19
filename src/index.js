
import React from 'react';
import './styles/index.css'
import App from './components/App'
// importation  de la méthode {createRoot} avec react dom/client
import { createRoot } from 'react-dom/client';
//recupère le rootElement dans 'root'
const rootElement = document.getElementById('root');
// création de la const root = createRoot pour rootElement
const root = createRoot(rootElement);

root.render(
		<App />
)
