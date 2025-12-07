import 'i18next';
import 'react-i18next';
import app from '../../public/locales/en/app.json';

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'app';
		resources: {
			app: typeof app;
		};
	}
}

declare module 'react-i18next' {
	interface CustomTypeOptions {
		defaultNS: 'app';
		resources: {
			app: typeof app;
		};
	}
}
