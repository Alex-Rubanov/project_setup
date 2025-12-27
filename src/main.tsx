import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import './index.css';
import App from '@/App';

const container = document.getElementById('root');

if (container) {
	createRoot(container).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
} else {
	throw new Error('Root container missing in index.html');
}
