import React from 'react'
// import { usePopUp } from '../context/menuStateContext'
import styles from '../styles/contacts.module.scss'

export const ContactsPage: React.FC = () => {
	// const { openCallMe } = usePopUp()
	return (
		<div className={styles.contacts}>
			<div className={styles.contactsInner}>
				<h1 className={styles.contactsTitle}>
					Контактная информация
				</h1>
				<div className={styles.contactsContent}>
					<div className={styles.contactsCity}>
						<div className={styles.cityTitle}>
							г. Моссква
						</div>
						<div className={styles.cityItem + ' ' + styles.strong}>
							<img src="/geo.svg" alt="geo" />
							41км МКАД TK "Славянский Мир" Tорговое место Д 35/2
						</div>
						<div className={styles.cityItem + ' ' + styles.strong}>
							<img src="/contactsPhone.svg" alt="geo" />
							<a href='tel:+74993901736'>+7 (499) 390 - 17 - 36</a>
						</div>
						<div className={styles.cityItem}>
							<img src="/contactsMail.svg" alt="geo" />
							mirlaminat@mail.ru
						</div>
						<div className={styles.cityItem}>
							<img src="/clock.svg" alt="geo" />
							Пн-Пт: с 08:00 до 20:00, <br /> Сб-Вс: с 08:00 до 17:00
						</div>
						<div className={styles.cityCall}>
							<div className={styles.callMe}>
								Обратный звонок:
							</div>
							<button className={styles.callMeBtn}>Перезвонить мне</button>
						</div>
					</div>
					<div className={styles.contactsGlobal}>
						<div className={styles.globalItem}>
							<div className={styles.globalLabel}>
								Справочная служба
							</div>
							<div className={styles.globalLink}>
								<a href='tel:+74993901736'>+7 (499) 390 - 17 - 36</a>
							</div>
						</div>
						<div className={styles.globalItem}>
							<div className={styles.globalLabel}>
								E-mail
							</div>
							<div className={styles.globalLink}>
								mirlaminat@mail.ru
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}