import React, { useState } from 'react'
import Link from 'next/link'
import { usePopUp } from '../context/menu-state-context'
import HamburgerMenu from 'react-hamburger-menu'
import Router from 'next/router'
import styles from '../styles/header.module.scss'
// import { useSelector } from 'react-redux';

export const Header: React.FC = () => {

	const { catalogState, toggleCatalog, closeCatalog, mobileCatalog, toggleMobileCatalog, openMobileSearch, openCallMe } = usePopUp()
	const [search, setSearch] = useState('')
	// const cartItems = useSelector(state => state.main.cartItems)

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			Router.push({
				pathname: '/search',
				query: { q: search.trim() }
			})
		}
	}
	return (
		<header className={styles.header}>
			<div className={styles.header__top}>
				<div className={styles.headerTopInner}>
					<div className={styles.headerTopInner__address}>
						Москва: улица Пушкина, дом 1
					</div>
					<div className={styles.headerTopInner__contacts}>
						<div className={styles.connection}>
							<span className={styles.mail}>
								<img src='/message.svg' alt='message'></img>
							zakaz@zakaz.ru
							</span>
							<a href='tel:+74999644811' className={styles.phone}>8 (800) 555-35-35</a>
						</div>
						<div onClick={() => {
							openCallMe()
							document.querySelector("body").classList.add("lock")
						}} className={styles.callbackBtn}>
							Перезвоните мне
						</div>
					</div>
				</div>
			</div>
			<div className={styles.header__main}>
				<div className={styles.headerMainInner}>
					<div className={styles.headerMainInner__logo}>
						<div className={styles.hamburger}>
							<HamburgerMenu
								isOpen={mobileCatalog}
								menuClicked={() => { toggleMobileCatalog(); document.querySelector("body").classList.add("lock"); }}
								width={20}
								height={14}
								strokeWidth={2}
								rotate={0}
								color='black'
								borderRadius={0}
								animationDuration={0.5}
							/>
						</div>
						<Link href='/'><a onClick={closeCatalog}>Mir<span>Laminat</span></a></Link>
					</div>
					<div className={styles.headerMainInner__menuLine}>
						<Link href='/catalog'>
							<a className={styles.catalogBtn}>
								Каталог
							{/* <img className={!catalogState ? styles.catalogArrow : styles.catalogArrow + ' ' + styles.activeArrow} src="/down-chevron.svg" alt="arrow" /> */}
							</a>
						</Link>
						<Link href='/catalog'>
							<a className={styles.mobileCatalogBtn}>
								Каталог
							</a>
						</Link>
						<ul className={styles.menu}>
							<li className={styles.menuItems}><Link href='/delivery-and-payment'><a onClick={closeCatalog}>Доставка и оплата</a></Link></li>
							<li className={styles.menuItems}><Link href='/about-us'><a onClick={closeCatalog}>О нас</a></Link></li>
							<li className={styles.menuItems}><Link href='/contacts'><a onClick={closeCatalog}>Контанты</a></Link></li>
						</ul>
						<div className={styles.delimiter}></div>
						<div className={styles.menuLoupeBlock} onClick={openMobileSearch} ><img className={styles.menuLoupe} src="/loupe.svg"></img></div>
						<Link href='/cart'>
							<a onClick={closeCatalog}>
								<div className={styles.cart}>
									<img className={styles.menuCart} src="/shopping-cart.svg" alt="cart" />
									{/* {cartItems.length != 0 ? <div className={styles.test}>{cartItems.length}</div> : undefined} */}
								</div>
							</a>
						</Link>
					</div>
				</div>
				<a href='tel:+79995554242' className={styles.mobilePhoneIcon}>
					<img className={styles.callSVG} src="/call.svg" alt="" />
				</a>
			</div>
			<div className={styles.header__bottom}>
				<div className={styles.headerBottomInner}>
					<div className={styles.headerBottomInner__title}>
						Что ищем?
					</div>
					<div className={styles.headerBottomInner__search}>
						<input type="text" onKeyPress={handleKeyPress} className={styles.searchInput} value={search} onChange={(e) => { setSearch(e.target.value) }} />
						<img src="/loupe.svg" alt="loupe" />
						<Link href={{ pathname: '/search', query: { q: search.trim() } }} ><a className={styles.searchBtn}>Найти</a></Link>
					</div>
				</div>
			</div>
		</header>
	)
}