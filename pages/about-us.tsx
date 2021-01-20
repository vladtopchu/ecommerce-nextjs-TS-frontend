import { AboutUsPage } from '../components/about-us-page'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import Head from 'next/head'

const AboutUs: React.FC = () => {
	return (
		<>
			<Head>
				<title>О нас</title>
			</Head>
			<Header />
			<AboutUsPage />
			<Footer />
		</>
	)
}

export default AboutUs