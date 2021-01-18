const sliderCarouselPartners = () => {

	const partners = document.querySelector('#partners');
	const partnersSlider = document.querySelector('.partners-slider');
	const partnersSliderSlide = document.querySelectorAll('.partners-slider__slide');

	let countCarousel = 0;
	let countSlideCarousel = 0;

	// const showPartnersSlider = (arr, index, activeClass) => {
	// 	arr.forEach((item, ind) => {
	// 		item.classList.remove(activeClass);
	// 		if (ind === index) {
	// 			item.classList.add(activeClass);
	// 		}
	// 	});
	// };
	// showPartnersSlider(partnersSliderSlide, 0, 'partners-slider__slide--active');
	// // showPartnersSlider(partnersSliderSlide, 1, 'partners-slider__slide--active');

	if (innerWidth <= 1024) {
		partnersSlider.style.width = '290px';
	}

	const prevCarousel = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				countCarousel -= 10;
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countCarousel}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 576) {
					if (countCarousel === 0) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 220) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 440) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 660) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 880) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 1024 && innerWidth >= 576) {
					if (countCarousel === 0) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 220) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 440) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 710) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 950) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth >= 1024) {
					if (countCarousel === 0) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 170) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 320) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 470) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 700) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideCarousel = 0;
		}
	};
	const nextCarousel = (elem, index) => {
		if (index <= elem.parentElement.children.length + 1) {
			const go = () => {
				countCarousel += 10;
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countCarousel}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 576) {
					if (countCarousel === 220) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 440) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 660) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 880) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth <= 1024 && innerWidth >= 576) {
					if (countCarousel === 220) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 440) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 710) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 950) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth >= 1024) {
					if (countCarousel === 170) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 320) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 470) {
						cancelAnimationFrame(animate);
					}
					if (countCarousel === 700) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			dfsf();
			[...elem.children].forEach(item => {
				item.style.transform = `translateX(0%)`;
			});
			countSlideCarousel--;
		}
	};

	const dfsf = () => {

	};

	partners.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('#partners-arrow_left')) {
			countSlideCarousel--;
			prevCarousel(partnersSlider, countSlideCarousel);
		}
		if (target.closest('#partners-arrow_right')) {
			countSlideCarousel++;
			nextCarousel(partnersSlider, countSlideCarousel);
			
		}
	});
};
export default sliderCarouselPartners;

