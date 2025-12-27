import { type SyntheticEvent, useEffect, useState } from 'react';

const matchPath = (path: string, route: string) => {
	const pathParts = path.split('/').filter(Boolean);
	const routeParts = route.split('/').filter(Boolean);

	if (pathParts.length !== routeParts.length) {
		return null;
	}

	const params: Record<string, string> = {};

	for (let i = 0; i < routeParts.length; i++) {
		if (routeParts[i].startsWith(':')) {
			const paramName = routeParts[i].slice(1);

			params[paramName] = pathParts[i];
		} else if (routeParts[i] !== pathParts[i]) {
			return null;
		}
	}

	return params;
};

export const useRoute = () => {
	const [path, setPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setPath(window.location.pathname);
		};

		window.addEventListener('popstate', onLocationChange);

		return () => window.removeEventListener('popstate', onLocationChange);
	}, []);

	return path;
};

export const Router = (props: {
	routes: Record<string, React.ComponentType>;
}) => {
	const { routes } = props;
	const path = useRoute();

	const Page = routes[path] ?? routes['*'];

	return <Page />;
};

export const RouterLink = (
	props: {
		to: string;
		children: React.ReactNode;
	} & React.AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
	const { to, children, ...rest } = props;

	const handleClick = (event: SyntheticEvent) => {
		event.preventDefault();
		window.history.pushState({}, '', to);
		window.dispatchEvent(new PopStateEvent('popstate'));
	};

	return (
		<a href={to} onClick={handleClick} {...rest}>
			{children}
		</a>
	);
};
