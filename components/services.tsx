import React from 'react'
import styles from '../styles/services.module.scss'

export const Services: React.FC = () => {
	return (
		<div className={styles.services}>
			<div className={styles.servicesInner}>
				<div className={styles.servicesList}>
					<div className={styles.serviceItem}>
						<img className={styles.serviceImg} src="/discount.svg" alt="" />
						<div className={styles.serviceTitle}>Доступные цены</div>
						<div className={styles.serviceSubTitle}>До 5% ниже, чем в крупных известных строительных магазинах</div>
					</div>
					<div className={styles.serviceItem}>
						<img className={styles.serviceImg} src="/discussion.svg" alt="" />
						<div className={styles.serviceTitle}>Консультация</div>
						<div className={styles.serviceSubTitle}>Подскажем, что лучше подойдет для вашего ремонта</div>
					</div>
					<div className={styles.serviceItem}>
						<img className={styles.serviceImg} src="/flexibility.svg" alt="" />
						<div className={styles.serviceTitle}>Гибкие условия</div>
						<div className={styles.serviceSubTitle}>Индивидуально подходим к клиенту - можем дать рассрочку, принять наличную и безналичную оплату</div>
					</div>
					<div className={styles.serviceItem}>
						<img className={styles.serviceImg} src="/premium-quality.svg" alt="" />
						<div className={styles.serviceTitle}>Качественные материалы</div>
						<div className={styles.serviceSubTitle}>Высылаем сертификаты по запросу, привозим лицензии</div>
					</div>
				</div>
			</div>
		</div >
	)
}