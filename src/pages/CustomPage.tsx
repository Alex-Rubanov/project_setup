import { RouterLink } from '@/Router';

export const CustomPage = (props: { params?: Record<string, string> }) => {
	const { params } = props;
	return (
		<div>
			<h1>Custom Page</h1>
			<p>Parameters: {JSON.stringify(params)}</p>
			<br />
			<RouterLink to="/">Go to Main Page</RouterLink>
		</div>
	);
};
