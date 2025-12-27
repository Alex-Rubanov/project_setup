import { RouterLink } from '@/Router';

export const MainPage = () => {
	const rndId = Math.ceil(Math.random() * 10);

	return (
		<div>
			<h1>Main Page</h1>
			<br />
			<RouterLink to="/about">Go to About Page</RouterLink>
			<br />
			<RouterLink to={`/custom/${rndId}`}>
				Go to Custom Page with ID {rndId}
			</RouterLink>
		</div>
	);
};
