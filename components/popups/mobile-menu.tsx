import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePopUp } from '../../context/menu-state-context'
import { CSSTransition } from 'react-transition-group'
import styles from '../../styles/mobile-menu.module.scss'
// import { useSelector } from 'react-redux';

export const MobileMenu: React.FC = () => {
	const categoryArray = ["Доставка и оплата", 'Бренды', 'Контакты']
	const [search, setSearch] = useState('')
	// const cartItems = useSelector(state => state.main.cartItems)
	const { mobileCatalog, closeMobileCatalog, openCallMe } = usePopUp()
	useEffect(() => {
		setSearch('')
	}, [mobileCatalog])
	return (
		<CSSTransition
			in={mobileCatalog}
			timeout={300}
			classNames={'mobileMenu'}
			mountOnEnter
			unmountOnExit
		>
			<div className={mobileCatalog ? styles.mobileMenu + ' ' + styles.activeCatalog : styles.mobileMenu}>
				<img
					className={styles.closeIcon}
					onClick={() => {
						closeMobileCatalog()
						document.querySelector("body").classList.remove("lock")
					}}
					src="/arrow.svg" alt="closearrow" />
				<div className={styles.mobileMenuInner}>
					<div className={styles.mobileSearchForm}>
						<input value={search} onChange={(e) => { setSearch(e.target.value) }} type="text" className={styles.searchInput} />
						<img className={styles.searchIcon} src="/loupe.svg" alt="loupe" />
						<Link href={{ pathname: '/search', query: { q: search.trim() } }}>
							<a
								onClick={() => {
									closeMobileCatalog()
									document.querySelector("body").classList.remove("lock")
								}}
								className={styles.searchBtn}>
								<span>Найти</span>
								<img className={styles.loupeIcon} src="/loupe.svg" alt="loupe" />
							</a>
						</Link>
					</div>
					<Link href='/catalog'>
						<a
							onClick={() => {
								closeMobileCatalog()
								document.querySelector("body").classList.remove("lock")
							}}
							className={styles.catalogLink}>
							Каталог
						</a>
					</Link>
					<ul className={styles.mobileList}>
						<Link href='/delivery-and-payment'>
							<li
								onClick={() => {
									closeMobileCatalog()
									document.querySelector("body").classList.remove("lock")
								}} className={styles.mobileListItem} >
								<a>Доставка и оплата</a>
							</li>
						</Link>
						<Link href='/about-us'>
							<li
								onClick={() => {
									closeMobileCatalog()
									document.querySelector("body").classList.remove("lock")
								}}
								className={styles.mobileListItem} >
								<a>О нас</a>
							</li>
						</Link>
						<Link href='/contacts'>
							<li
								onClick={() => {
									closeMobileCatalog()
									document.querySelector("body").classList.remove("lock")
								}}
								className={styles.mobileListItem} >
								<a>Контакты</a>
							</li>
						</Link>
					</ul>
					<Link href='/cart'>
						<a
							onClick={() => {
								closeMobileCatalog()
								document.querySelector("body").classList.remove("lock")
							}}
							className={styles.cartLink}>
							Корзина
							<img className={styles.cartIcon} src="/shopping-cart.svg" alt="cart" />
							{/* {cartItems.length != 0 ? <div className={styles.bubble}>{cartItems.length}</div> : undefined} */}
						</a>
					</Link>

					<a className={styles.mailLink}>
						<img className={styles.mailIcon} src="/email.svg" alt="mail" />
					zakaz@stokel.ru
					</a>
					<a href='tel:+74999644811' className={styles.callLink}>
						<img className={styles.callIcon} src="/call.svg" alt="mail" />
						8 (499) 964-48-11
					</a>
					<div className={styles.callMe}>
						<button
							className={styles.callMeBtn}
							onClick={() => {
								closeMobileCatalog()
								document.querySelector("body").classList.add("lock")
								openCallMe();
							}}
						>Перезвоните мне</button>
					</div>
				</div>
			</div>
		</CSSTransition >
	)
}