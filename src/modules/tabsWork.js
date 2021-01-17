const tabsWork = () => {

	const schemeListElem = document.querySelector('#scheme-list');
	const schemeSliderSlideElem = document.querySelectorAll('.scheme-slider__slide');
	const schemeDescriptionBlockElem = document.querySelectorAll('.scheme-description-block');
	const schemeElem = document.querySelector('#scheme');
	const showTabs = lengthTabs => {
		schemeSliderSlideElem.forEach((item, index) => {
			item.style.display = 'none';
			if (index === 0 && lengthTabs === 0) {
				item.style.display = 'block';
			}
			if (index === 1 && lengthTabs === 1) {
				item.style.display = 'block';
			}
			if (index === 2 && lengthTabs === 2) {
				item.style.display = 'block';
			}
			if (index === 3 && lengthTabs === 3) {
				item.style.display = 'block';
			}
			if (index === 4 && lengthTabs === 4) {
				item.style.display = 'block';
			}
			if (index === 5 && lengthTabs === 5) {
				item.style.display = 'block';
			}
		});
		schemeDescriptionBlockElem.forEach((item, index) => {
			item.classList.remove('visible-content-block');
			if (index === 0 && lengthTabs === 0) {
				item.classList.add('visible-content-block');
			}
			if (index === 1 && lengthTabs === 1) {
				item.classList.add('visible-content-block');
			}
			if (index === 2 && lengthTabs === 2) {
				item.classList.add('visible-content-block');
			}
			if (index === 3 && lengthTabs === 3) {
				item.classList.add('visible-content-block');
			}
			if (index === 4 && lengthTabs === 4) {
				item.classList.add('visible-content-block');
			}
			if (index === 5 && lengthTabs === 5) {
				item.classList.add('visible-content-block');
			}
		});
	};

	const addActiveTabs = elem => {
		elem.classList.toggle('active');
	};

	const clearActiveTabs = () => {
		[...schemeListElem.children].forEach(item => {
			item.classList.remove('active');
		});
	};

	let countTabs = 0;
	let currentSlideTabs = 0;

	const prevTabs = (elem, index) => {
		if (index >= 0) {
			const go = () => {
				countTabs -= 5;
				console.log('countTabs: ', countTabs);
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countTabs}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countTabs <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 100) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 200) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 300) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 400) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 500) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideTabs = 0;
		}
	};


	const nextTabs = (elem, index, countLenght) => {
		console.log('elem: ', elem.getBoundingClientRect('right'));

		if (index <= countLenght - 1) {
			const go = () => {
				countTabs += 5;
				// console.log('countTabs: ', countTabs);
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countTabs}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countTabs <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 100) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 200) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 300) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 400) {
					cancelAnimationFrame(animate);
				}
				if (countTabs === 500) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideTabs--;
		}
	};

	schemeElem.addEventListener('click', event => {
		const target = event.target;
		if (target.closest('button')) {
			clearActiveTabs();
			addActiveTabs(target);
			[...target.parentElement.children].forEach((item, index) => {
				if (item.classList.contains('active') && index === 0) {
					showTabs(index);
				}
				if (item.classList.contains('active') && index === 1) {
					showTabs(index);
				}
				if (item.classList.contains('active') && index === 2) {
					showTabs(index);
				}
				if (item.classList.contains('active') && index === 3) {
					showTabs(index);
				}
				if (item.classList.contains('active') && index === 4) {
					showTabs(index);
				}
				if (item.classList.contains('active') && index === 5) {
					showTabs(index);
				}
			});
		}
		if (target.closest('#nav-arrow-scheme_left')) {
			currentSlideTabs--;
			prevTabs(schemeListElem, currentSlideTabs);
		}
		if (target.closest('#nav-arrow-scheme_right')) {
			currentSlideTabs++;
			nextTabs(schemeListElem, currentSlideTabs, schemeListElem.children.length);
		}
	});
};


export default tabsWork;

