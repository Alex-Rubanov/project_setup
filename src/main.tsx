import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import './index.css';
import App from '@/App';
import { AboutPage } from './pages/AboutPage';
import { CustomPage } from './pages/CustomPage';
import { MainPage } from './pages/MainPage';
import { Router, RouterLink } from './Router';

const container = document.getElementById('root');

const routes = {
	'/': MainPage,
	'/about': AboutPage,
	'/custom/:id': CustomPage,
	'*': () => (
		<div>
			<h1>404 - Page Not Found</h1>
			<br />
			<RouterLink to="/">Go to Main Page</RouterLink>
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
