import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../styles/slider.module.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const Slider: React.FC = () => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			navigation
			loop
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			pagination={{ clickable: true }}
		>
			<SwiperSlide>
				<div className={styles.slide}>
					<div className={styles.slideInner}>
						<div className={styles.firstSlide}>
							<div className={styles.firstSlideTitle}>
								Мы рады приветствовать вас в магазине Mir<span>Laminat</span>!
							</div>
							<div className={styles.firstSlideSub}>
								В нашем магазине вы сможете найти широкий выбор образцов покрытий российского и зарубежного производства
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.slide}>
					<div className={styles.slideInner}>
						<div className={styles.secondSlide}>
							<div className={styles.secondSlideTitle}>
								Mir<span>Laminat</span> это:
							</div>
							<div className={styles.secondSlideList}>
								<div className={styles.listItem}>
									<span className={styles.itemTitle}>Обширный выбор дизайнерского решения</span>
									<img src="/idea.svg" alt="idea" />
								</div>
								<div className={styles.listItem}>
									<span className={styles.itemTitle}>Многообразие типов поверхности</span>
									<img src="/branding.svg" alt="idea" />
								</div>
								<div className={styles.listItem}>
									<span className={styles.itemTitle}>Лояльная ценовая политика</span>
									<img src="/loyalty.svg" alt="loality" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.slide}>
					<div className={styles.slideInner}>
						<div className={styles.thirdSlide}>
							<div className={styles.thirdSlideTitle}>
								Делая заказ в  Mir<span>Laminat</span>, вы гарантированно получаете товар высокого качества!
							</div>
							<img src="/quality.svg" alt="quality" />
						</div>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}