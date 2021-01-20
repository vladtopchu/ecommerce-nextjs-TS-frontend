import React from 'react'
import { ContactsPage } from '../components/contacts-page'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import Head from 'next/head'

const Contacts: React.FC = () => {
	return (
		<>
			<Head>
				<title>Контакты</title>
			</Head>
			<Header />
			<ContactsPage />
			<Footer />
		</>
	)
}

export default Contacts