import type { NextPage } from 'next';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
	return (
		<Layout title="Home">
			<h1 className="text-4xl mb-8 text-center">
				Athabasca University ISML Research Cluster
			</h1>
		</Layout>
	);
};

export default Home;
