import { RouterLink, useParams } from '@/Router';

export const CustomPage = () => {
	const { id } = useParams<{
		id: string;
	}>();

	return (
		<div>
			<h1>Custom Page</h1>
			<p>Parameters (hook): {JSON.stringify({ id })}</p>
			<br />
			<RouterLink to="/">Go to Main Page</RouterLink>
		</div>
	);
};
