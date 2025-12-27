import { RouterLink } from '@/Router';

export const MainPage = () => {
	return (
		<div>
			<h1>Main Page</h1>
			<br />
			<RouterLink to="/about">Go to About Page</RouterLink>
		</div>
	);
};
