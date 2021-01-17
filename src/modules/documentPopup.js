const documentPopup = () => {

	let count = 0;
	let currentSlide = 0;
	const popupTransparencyElem = document.querySelector('.popup-transparency');
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


export default documentPopup;
