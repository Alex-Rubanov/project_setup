import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import './index.css';
import App from '@/App';
import { AboutPage } from './pages/AboutPage';
import { MainPage } from './pages/MainPage';
import { Router } from './Router';

const container = document.getElementById('root');

const routes = {
	'/': MainPage,
	'/about': AboutPage,
	'*': () => (
		<div>
			<h1>404 - Page Not Found</h1>
		</div>
	),
};

if (container) {
	createRoot(container).render(
		<StrictMode>
			<Router routes={routes} />
		</StrictMode>,
	);
} else {
	throw new Error('Root container missing in index.html');
}
