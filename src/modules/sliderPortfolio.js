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
	
	let countSliderPopupPortfolio = 0;
	sliderCounterContentTotal[3].textContent = '10';
	sliderCounterContentCurrent[3].textContent = '1';

	const addActiveClassSlider = (arr, ind, activeClass) => {
		if (ind === -1) {
			ind = 9;
			countSliderPopupPortfolio = 9;
		}
		if (ind <= arr.children.length - 1) {
			sliderCounterContentCurrent[3].textContent = ind + 1;
			[...arr.children].forEach((item, i) => {
				item.classList.remove(activeClass);
				if (i === ind) {
					item.classList.add(activeClass);
				}
			});
		} else {
			sliderCounterContentCurrent[3].textContent =  '1';
			countSliderPopupPortfolio = 0;
		}
	};
	addActiveClassSlider(popupPortfolioSlider, 0, 'popup-portfolio-slider__slide--active');

	const addActiveClassText = (arr, ind, activeClass) => {
		if (ind === -1) {
			ind = 9;
		}
		if (ind <= arr.length - 1) {
			arr.forEach((item, i) => {
				item.classList.remove(activeClass);
				if (i === ind) {
					item.classList.add(activeClass);
				}
			});
		} else {
			countSliderPopupPortfolio = 0;
		}
	};
	addActiveClassText(popupPortfolioText, 0, 'popup-portfolio-text--active');

	portfolioSlider.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('.portfolio-slider__slide-frame')) {
			popupPortfolio.classList.add('visible');
			addActiveClassSlider(popupPortfolioSlider, 0, 'popup-portfolio-slider__slide--active');
			addActiveClassText(popupPortfolioText, 0, 'popup-portfolio-text--active');
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
