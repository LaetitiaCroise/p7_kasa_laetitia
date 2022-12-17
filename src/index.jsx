import React from 'react';
import './styles/index.css'
import App from './components/App'
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
		<App />
)