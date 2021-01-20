import React, { useEffect, useState } from 'react'
import { usePopUp } from '../../context/menu-state-context'
import { CSSTransition } from 'react-transition-group'
import styles from '../../styles/call-me.module.scss'
// import { useHttp } from '../hooks/http.hook'

export const CallMePopUp: React.FC = () => {
	const { callMePopUp, closeCallMe } = usePopUp()
	// const { request, error, clearError, loading } = useHttp()
	const [success, setSuccess] = useState(false)

	const [form, setForm] = useState({ phone: "", name: "" })

	const changeHadler = event => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	// const callMe = async () => {
	// 	try {
	// 		await request('/api/admin/call-me', 'POST', { ...form })
	// 		setSuccess(true)
	// 	} catch (e) {
	// 		console.log(e)
	// 	}
	// }

	return (
		<>
			<CSSTransition
				in={callMePopUp}
				timeout={300}
				classNames={'callMe'}
				mountOnEnter
				unmountOnExit
			>
				<div className={styles.callMe}>
					<div className={styles.closeModal}
						onClick={() => {
							closeCallMe()
							document.querySelector("body").classList.remove("lock")
						}}>
						<img className={styles.closeIcon} src="/cancel.svg" alt="cancel" />
					</div>
					<div className={styles.callMeInner}>
						{!success ?
							(
								<>
									<div className={styles.callMeTitle}>
										Заполните заявку и мы перезвоним вам
								</div>
									<div className={styles.callMeForm}>
										<div className={styles.columnLeft}>
											<label htmlFor="callMePhone">
												Введите ваш номер телефона:
										</label>
											<div className={styles.callMeInput}>
												<input className={styles.inputInner} onChange={changeHadler} type="text" name="phone" id="phone" value={form.phone} />
											</div>
										</div>
										<div className={styles.columnRight}>
											<label htmlFor="callMeName">
												Введите ваше имя:
										</label>
											<div className={styles.callMeInput}>
												<input className={styles.inputInner} onChange={changeHadler} type="text" name="name" id="name" value={form.name} />
											</div>
											<button className={styles.btn}>Перезвоните мне!</button>
										</div>
									</div>
								</>
							)
							:
							(
								<div className={styles.success}>
									Ваша заявка принята!
									<span>В скором времени мы с вами свяжемся.</span>
									<span></span>
								</div>
							)
						}
					</div>
				</div>
			</CSSTransition>
			<CSSTransition
				in={callMePopUp}
				timeout={500}
				classNames={'callMeBg'}
				mountOnEnter
				unmountOnExit>
				<div className={styles.callMeBg}
					onClick={() => {
						closeCallMe()
						document.querySelector("body").classList.remove("lock")
					}}></div>
			</CSSTransition>
		</>
	)
}