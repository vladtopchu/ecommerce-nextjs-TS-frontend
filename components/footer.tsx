import React, { useEffect } from 'react'
import { usePopUp } from '../context/menu-state-context'
import styles from '../styles/footer.module.scss'
import Link from 'next/link'

function script(url) {
	if (Array.isArray(url)) {
		let self = this;
		let prom = [];
		url.forEach(function (item) {
			prom.push(self.script(item));
		});
		return Promise.all(prom);
	}

	return new Promise(function (resolve, reject) {
		let r = false;
		let t = document.querySelector('#script');
		let s = document.createElement('script');

		s.type = 'text/javascript';
		s.src = url;
		s.async = true;
		s.onload = s.onreadystatechange = function () {
			if (!r && (!this.readyState || this.readyState === 'complete')) {
				r = true;
				resolve(this);
			}
		};
		s.onerror = s.onabort = reject;
		t.parentNode.appendChild(s);
	});
}
export const Footer: React.FC = () => {

	useEffect(() => {
		script('https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa914e36c12e5e0758777f8af2565c71cf7487d5d9bfa8a52d9973349d25802b1&amp;width=100%25&amp;height=320&amp;lang=ru_RU&amp;scroll=true').catch(console.log)
	}, [])

	const { openCallMe } = usePopUp()

	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.footer}>
				<div className={styles.footer__top}>
					<div className={styles.first_container}>
						<div className={styles.logo}>
							<p>Mir<span>Laminat</span></p>
							<div className={styles.mobileFooterLogo}>
								<a href='tel:+79060393141'>8 (906) 039-31-41</a>
								<div onClick={openCallMe} className={styles.mobileCallMe}><img src="/call.svg" alt="call" /></div>
							</div>
						</div>
						<div className={styles.slogan}>
							Стройматериалы с доставкой по Москве <br />и Московской области
					</div>
					</div>
					<div className={styles.second_container}>
						<div className={styles.mail_phone_container}>
							<div className={styles.mail_phone}>
								<img className={styles.mail_icon} src='/email.svg' alt='message'></img>
								<a href="mailto:mirlaminat@mail.ru">mirlaminat@mail.ru</a>
							</div>
							<div className={styles.mail_phone}>
								<img className={styles.phone_icon} src='/call.svg' alt='message'></img>
								<a href='tel:+79060393141'>8 (906) 039-31-41</a>
							</div>
						</div>
						<div className={styles.callback_button}
							onClick={() => {
								openCallMe()
								document.querySelector("body").classList.add("lock")
							}}>
							Обратный звонок
					</div>
					</div>
				</div>
				<div className={styles.footer__bottom}>
					<span className={styles.address}>
						Москва, <b>Калужское шоссе, 4с9</b><br />Торговое место <b>Д 35/2</b>
					</span>
					<div className={styles.links}>
						<Link href='/delivery-and-payment' ><a>Доставка и оплата</a></Link>
						<Link href='/contacts'><a href="/">Контакты</a></Link>
					</div>
				</div>
				<div className={styles.map} id="script">
				</div>
			</div>
		</footer>
	)
}