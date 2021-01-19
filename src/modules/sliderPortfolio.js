/* eslint-disable max-len */
const sliderPortfolio = () => {
	const portfolioSlider  = document.querySelector('.portfolio-slider');
	const portfolioSliderSlideFrame = document.querySelectorAll('.portfolio-slider__slide-frame');
	const popupPortfolio = document.querySelector('.popup-portfolio');
	const popupPortfolioSliderWrap = document.querySelector('.popup-portfolio-slider-wrap');
	const popupPortfolioSlider = document.querySelector('.popup-portfolio-slider');
	const popupPortfolioText = document.querySelectorAll('.popup-portfolio-text');
	const sliderCounterContentCurrent = document.querySelectorAll('.slider-counter-content__current');
	const sliderCounterContentTotal = document.querySelectorAll('.slider-counter-content__total');
	
	let countPopupPortfo = 0;
	let countSliderPopupPortfolio = 0;
	sliderCounterContentTotal[3].textContent = '10';
	sliderCounterContentCurrent[3].textContent = '1';

	const addActiveClassSlider = (arr, ind, activeClass) => {
		// if (ind <= 0) {
		// 	ind = 0;
		// }
		// console.log('Slider: ', ind);
		// console.log('arr.children.length: ', arr.children.length);
		if (ind <= arr.children.length - 1) {
			console.log('ind: ', ind);
			sliderCounterContentCurrent[3].textContent = ind + 1;
			[...arr.children].forEach((item, i) => {
				item.classList.remove(activeClass);
				if (i === ind) {
					console.log('ind: ', ind);
					console.log('i: ', i);

					item.classList.add(activeClass);
				}
			});
		} else {
			console.log('else Slider');
			countSliderPopupPortfolio = 0;
		}
	};
	addActiveClassSlider(popupPortfolioSlider, 0, 'popup-portfolio-slider__slide--active');

	const addActiveClassText = (arr, ind, activeClass) => {
		// console.log('Text: ', ind);
		// console.log('arr.length: ', arr.length);
		// if (ind <= 0) {
		// 	ind = 0;
		// }
		if (ind <= arr.length - 1) {
			arr.forEach((item, i) => {
				item.classList.remove(activeClass);
				if (i === ind) {
					item.classList.add(activeClass);
				}
			});
		} else {
			console.log('else Text');
			countSliderPopupPortfolio = 0;
		}

	};
	addActiveClassText(popupPortfolioText, 0, 'popup-portfolio-text--active');

	portfolioSlider.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('.portfolio-slider__slide-frame')) {
			popupPortfolio.classList.add('visible');
		}
	});

	popupPortfolio.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('#popup_portfolio_left')) {
			countSliderPopupPortfolio--;
			addActiveClassSlider(popupPortfolioSlider, countSliderPopupPortfolio, 'popup-portfolio-slider__slide--active');
			addActiveClassText(popupPortfolioText, countSliderPopupPortfolio, 'popup-portfolio-text--active');
		}
		if (target.closest('#popup_portfolio_right')) {
			countSliderPopupPortfolio++;
			addActiveClassSlider(popupPortfolioSlider, countSliderPopupPortfolio, 'popup-portfolio-slider__slide--active');
			addActiveClassText(popupPortfolioText, countSliderPopupPortfolio, 'popup-portfolio-text--active');
		}
	});
};


export default sliderPortfolio;
