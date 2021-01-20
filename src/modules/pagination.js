const pagination = () => {
	const designs = document.querySelector('#designs');
	const navDesigns = document.querySelector('.nav-designs');
	const designsSlider = document.querySelector('.designs-slider');
	const previewBlock = document.querySelectorAll('.preview-block');
	
	const designsList = document.querySelector('#designs-list');
	const designsSliderStyleNon = document.querySelectorAll('.designs-slider__style-non');

	const designsSliderStyleSlide = document.querySelectorAll('.designs-slider__style-slide');
	
	
	const popupDesign = document.querySelector('.popup-design');
	const navListPopupDesigns = document.querySelector('#nav-list-popup-designs');
	const popupDesignSlider = document.querySelector('.popup-design-slider');
	const popupDesignText = document.querySelectorAll('.popup-design-text');

	const addActiveClassSlider = (arr, ind, activeClass) => {
		[...arr.children].forEach((item, i) => {
			item.classList.remove(activeClass);
			if (i === ind) {
				item.classList.add(activeClass);
			}
		});
	};
	addActiveClassSlider(designsSlider, 0, 'designs-slider__style-non--active');
	addActiveClassSlider(popupDesignSlider, 0, 'popup-designs-slider__style-non--active');

	const addActiveClassPreview = (arr, ind, activeClass) => {
		arr.forEach((item, i) => {
			item.classList.remove(activeClass);
			if (i === ind) {
				item.classList.add(activeClass);
			}
		});
	};
	addActiveClassPreview(previewBlock, 0, 'visible');
	addActiveClassPreview(popupDesignText, 0, 'visible-content-block');
	


	let countDesign = 0;
	let countSlideDesign = 0;

	const prevDesign = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				countDesign -= 5;
				elem.style.transform = `translateX(${-countDesign}%)`;
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 1024 && innerWidth > 576) {
					if (countDesign === 0) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 35) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth < 1024 && innerWidth <= 576) {
					if (countDesign === 0) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 20) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 40) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 55) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 75) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideDesign = 0;
		}
	};
	const nextDesign = (elem, index) => {
		let countIndex = 1;
		if (innerWidth < 1024 && innerWidth <= 576) {
			countIndex = 4;
		}
		if (index <= countIndex) {
			const go = () => {
				countDesign += 5;
				elem.style.transform = `translateX(${-countDesign}%)`;
				const animate = requestAnimationFrame(go);
				if (innerWidth <= 1024 && innerWidth > 576) {
					if (countDesign === 35) {
						cancelAnimationFrame(animate);
					}
				}
				if (innerWidth < 1024 && innerWidth <= 576) {
					if (countDesign === 20) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 40) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 55) {
						cancelAnimationFrame(animate);
					}
					if (countDesign === 75) {
						cancelAnimationFrame(animate);
					}
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideDesign--;
		}
	};



	designs.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('#nav-arrow-designs_left')) {
			countSlideDesign--;
			prevDesign(designsList, countSlideDesign);
		}
		if (target.closest('#nav-arrow-designs_right')) {
			countSlideDesign++;
			nextDesign(designsList, countSlideDesign);
		}
		if (target.tagName === 'A') {
			popupDesign.classList.add('visible');
		}
		if (target.tagName === 'BUTTON') {
			[...designsList.children].forEach((item, i) => {
				item.classList.remove('active');
				if (item === target) {
					item.classList.add('active');
					addActiveClassSlider(designsSlider, i, 'designs-slider__style-non--active');
					addActiveClassPreview(previewBlock, i, 'visible');

				}
			});
			// total = document.querySelector('.types-repair-item--active').children.length;
			// getConutValue();
			// celarStyle();
		}
		if (target.closest('.preview-block__item')) {
			// designsSliderStyleNon.forEach(item => {
			// 	// console.log('item: ', item);
				
			// 	if (item.classList.contains('designs-slider__style-non--active')) {
			// 	// console.log('item: ', item);

			// 		let countst = 0;
			// 		[...item.children].forEach((items, ind) => {
			// 			// console.log('items: ', items);
			// 			countst = ind;
			// 		});
			// 		// addActiveClassSlider(item, countst, 'designs-slider__style-slide--active');
			// 	}

			// });
		}


	});

	popupDesign.addEventListener('click', event => {
		const target = event.target;
		if (target.tagName === 'BUTTON') {
			[...navListPopupDesigns.children].forEach((item, i) => {
				item.classList.remove('active');
				if (item === target) {
					item.classList.add('active');
					addActiveClassSlider(popupDesignSlider, i, 'popup-designs-slider__style-non--active');
					addActiveClassPreview(popupDesignText, i, 'visible-content-block');

				}
			});
		}
		if (target.closest('#nav-arrow-popup-designs_left')) {
			countSlideDesign--;
			prevDesign(navListPopupDesigns, countSlideDesign);
		}
		if (target.closest('#nav-arrow-popup-designs_right')) {
			countSlideDesign++;
			nextDesign(navListPopupDesigns, countSlideDesign);
		}
	});
};

export default pagination;


