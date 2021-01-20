import React from 'react'
import styles from '../styles/delivery-and-payment.module.scss'

export const DelAndPay: React.FC = () => {
	return (
		<div className={styles.delAndPey}>
			<div className={styles.delAndPeyInner}>
				<h1 className={styles.pageTitle}>
					Доставка и оплата
				</h1>
				<div className={styles.deliveryContent}>
					<div className={styles.deliveryTable}>
						<div className={styles.delivery}>
							<h2 className={styles.deliveryTitle}>Доставка</h2>
							<div className={styles.deliveryList}>
								<div className={styles.deliveryItem}>
									<div className={styles.deliveryGeo}>
										По Москве
									</div>
									<div className={styles.border} />
									<div className={styles.deliveryPrice}>
										1 500₽
									</div>
								</div>
								<div className={styles.deliveryItem}>
									<div className={styles.deliveryGeo}>
										По Московской области (за МКАД)
									</div>
									<div className={styles.border} />
									<div className={styles.deliveryPrice}>
										25₽/км
									</div>
								</div>
								<div className={styles.deliveryItem}>
									<div className={styles.deliveryGeo}>
										Самовывоз
									</div>
									<div className={styles.border} />
									<div className={styles.deliveryPrice}>
										Бесплатно
									</div>
								</div>
								<div className={styles.deliveryItem}>
									<div className={styles.deliveryGeo}>
										По России
									</div>
									<div className={styles.border} />
									<div className={styles.deliveryPrice}>
										от 1 500₽
									</div>
								</div>
							</div>
						</div>
						<div className={styles.payment}>
							<h2 className={styles.paymentTitle}>Оплата</h2>
							<div className={styles.paymentList}>
								<div className={styles.paymentItem}>
									<span>
										Наличными при получении
										<img src="/cash-flow.svg" alt="cash" />
									</span>
								</div>
								<div className={styles.paymentItem}>
									<span>
										Наложенный платёж
										<img src="/box.svg" alt="parcel" />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.deliveryText}>
					Доставляем партии любого объёма во все регионы РФ. По Москве и Московской области доставим в течение 4 часов в день обращения с оплатой по факту получения заказа и подъёмом на этаж. Возможен наличный и безналичный расчет. Если в партии случайно оказывается брак — обращаемся к производителю за заменой и доставляем за свой счёт.
				</div>
			</div>
		</div>
	)
}