import React, { useState, useEffect } from 'react'
import { usePopUp } from '../../context/menu-state-context'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import styles from '../../styles/mobile-search.module.scss'

export const MobileSearch: React.FC = () => {
	const { mobileSearch, closeMobileSearch } = usePopUp()
	const [search, setSearch] = useState('')
	useEffect(() => {
		setSearch('')
	}, [mobileSearch])
	return (
		<>
			<CSSTransition
				in={mobileSearch}
				timeout={400}
				classNames={'mobileSearch'}
				mountOnEnter
				unmountOnExit
			>
				<div className={mobileSearch ? styles.mobileSearch + ' ' + styles.activeSearch : styles.mobileSearch}>
					<img className={styles.closeBtn} onClick={closeMobileSearch} src="/arrow.svg" alt="arrow" />
					<div className={styles.mobileMenuInner}>
						<div className={styles.searchForm}>
							<input placeholder='Поиск' value={search} onChange={(e) => { setSearch(e.target.value) }} className={styles.searchInput} />
							<Link href={{ pathname: '/search', query: { q: search.trim() } }}>
								<a onClick={closeMobileSearch}>
									<img className={styles.loupeSvg} src="/loupe.svg" alt="loupe" />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</CSSTransition>
			<CSSTransition
				in={mobileSearch}
				timeout={550}
				classNames={'mobileSearchBg'}
				mountOnEnter
				unmountOnExit>
				<div className={styles.mobileBg} onClick={closeMobileSearch}></div>
			</CSSTransition>
		</>
	)
}