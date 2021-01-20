import React from 'react'
import { DelAndPay } from '../components/delivery-payment-page'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import Head from 'next/head'

const DeliveryAndPayment: React.FC = () => {
	return (
		<>
			<Head>
				<title>Доставка и оплата</title>
			</Head>
			<Header />
			<DelAndPay />
			<Footer />
		</>
	)
}

export default DeliveryAndPayment