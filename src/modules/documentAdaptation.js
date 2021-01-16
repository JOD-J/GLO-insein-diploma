const documentAdaptation = () => {
	const transparencySliderWrapElem = document.querySelector('.transparency-slider-wrap');
	const transparencySliderElem = document.querySelector('.transparency-slider');
	console.log('transparencySliderElem: ', transparencySliderElem);
	const transparencyIitemElem = document.querySelectorAll('.transparency-item');
	const popupTransparencyElem = document.querySelector('.popup-transparency');

	let count = 0;
	let currentSlide = 0;

	const adaptationDocumet = () => {
		const widthWindow = document.documentElement.clientWidth;
		console.log('widthWindow: ', widthWindow);

		if (widthWindow <= 1024) {
			[...transparencySliderElem.children].forEach(item => {
				console.log('item: ', item);
				// item.style.opacity  = '0';
				item.style.overflow = 'hidden';
				// item[0].style.display = 'block';
			});
		} else if (widthWindow <= 768) {

		}

	};


	const sliderDocumetn = elem => {
		console.log('elem: ', elem);

	};

	window.addEventListener('resize', adaptationDocumet);


	transparencySliderWrapElem.addEventListener('click', event => {
		const target = event.target;
		event.preventDefault();
		if (target.closest('#transparency-arrow_left')) {
			sliderDocumetn(transparencySliderElem);
		}
		if (target.closest('#transparency-arrow_right')) {
			sliderDocumetn(transparencySliderElem);
		}
		if (target.matches('.transparency-item__img')) {
			popupTransparencyElem.classList.add('visible');
		}
	});





	const popupTransparencySlider = document.querySelector('.popup-transparency-slider');
	const sliderCounterContentTotal = document.querySelectorAll('.slider-counter-content__total');
	const sliderСounterСontentСurrent = document.querySelectorAll('.slider-counter-content__current');
	sliderCounterContentTotal[4].textContent = '3';
	sliderСounterСontentСurrent[4].textContent = '1';



	const prevSlide = (elem, index) => {
		if (index >= 0) {
			sliderСounterСontentСurrent[4].textContent = 1 + currentSlide;

			const go = () => {
				count -= 2;
				[...elem.children].forEach(item => {
					item.style.transform = `translateY(${-count}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (count <= 0) {
					cancelAnimationFrame(animate);
				}
				if (count === 100) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlide = 0;
		}
	};

	const nextSlide = (elem, index) => {
		if (index <= 2) {
			sliderСounterСontentСurrent[4].textContent = currentSlide + 1;
			const go = () => {
				count += 2;
				[...elem.children].forEach(item => {
					item.style.transform = `translateY(${-count}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (count === 100) {
					cancelAnimationFrame(animate);
				}
				if (count === 200) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlide--;
		}
	};

	popupTransparencyElem.addEventListener('click', event => {
		const target = event.target;
		if (target.closest('#transparency_left')) {
			currentSlide--;
			prevSlide(popupTransparencySlider, currentSlide);
		}
		if (target.closest('#transparency_right')) {
			currentSlide++;
			nextSlide(popupTransparencySlider, currentSlide);
		}
	});

};

export default documentAdaptation;
