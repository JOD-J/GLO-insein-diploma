const sliderReviews = () => {
	const rowReverseElem = document.querySelector('.row_reverse');
	const navListRepairElem = document.querySelector('.nav-list-repair');
	const repairTypesSlider = document.querySelector('.repair-types-slider');
	const repairTypesSliderSlide = document.querySelectorAll('.repair-types-slider__slide');
	const sliderCounterContentCurrent = document.querySelector('.slider-counter-content__current');
	const sliderCounterContentTotal = document.querySelector('.slider-counter-content__total');
	const typesRepair1 = document.querySelector('.types-repair1');
	const typesRepair2 = document.querySelector('.types-repair2');
	const typesRepair3 = document.querySelector('.types-repair3');
	const typesRepair4 = document.querySelector('.types-repair4');
	const typesRepair5 = document.querySelector('.types-repair5');
	const repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item');

	// repairTypesNavItem.forEach(item => {
	// 	console.log('item: ', item);
	// 	// item.style.margin = '0 35px 0 35px';

	// });
	// navListRepairElem.style.minWidth = '1px';
	sliderCounterContentTotal.textContent = '5';
	let countRepairs = 0;
	let countRepairsBase = 0;

	let currentSlideRepairs = 0;
	let currentSlideRepairsBase = 0;

	const prevRepairs = (elem, index) => {
		if (index >= 0) {
			sliderCounterContentCurrent.textContent = 1 + currentSlideRepairs;
			const go = () => {
				countRepairs -= 5;
				[...elem.children].forEach(item => {
					item.style.transform = `translateY(${-countRepairs}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countRepairs <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countRepairs === 100) {
					cancelAnimationFrame(animate);
				}
				if (countRepairs === 200) {
					cancelAnimationFrame(animate);
				}
				if (countRepairs === 300) {
					cancelAnimationFrame(animate);
				}
				if (countRepairs === 400) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideRepairs = 0;
		}
	};

	const nextRepairs = (elem, index, countLenght) => {
		if (index <= countLenght - 1) {
			const go = () => {
				sliderCounterContentCurrent.textContent = 1 + currentSlideRepairs;
				countRepairs += 5;
				[...elem.children].forEach(item => {
					item.style.transform = `translateY(${-countRepairs}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countRepairs <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countRepairs === 100) {
					cancelAnimationFrame(animate);
				}
				if (countRepairs === 200) {
					cancelAnimationFrame(animate);
				}
				if (countRepairs === 300) {
					cancelAnimationFrame(animate);
				}
				if (countRepairs === 400) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideRepairs--;
		}
	};

	const prevRepairsBase = (elem, index) => {
		console.log('index: ', index);
		if (index >= 0) {
			const go = () => {
				countRepairsBase -= 5;
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countRepairsBase}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countRepairsBase <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countRepairsBase === 100) {
					cancelAnimationFrame(animate);
				}
				if (countRepairsBase === 200) {
					cancelAnimationFrame(animate);
				}
				if (countRepairsBase === 300) {
					cancelAnimationFrame(animate);
				}
				if (countRepairsBase === 400) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideRepairsBase = 0;
		}
	};

	const nextRepairsBase = (elem, index, countLenght) => {
		console.log('index: ', index);
		console.log('elem: ', elem);
		if (index <= countLenght - 1) {
			const go = () => {
				countRepairsBase += 5;
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countRepairsBase}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countRepairsBase <= 0) {
					cancelAnimationFrame(animate);
				}
				if (countRepairsBase === 100) {
					cancelAnimationFrame(animate);
				}
				if (countRepairsBase === 200) {
					cancelAnimationFrame(animate);
				}
				if (countRepairsBase === 300) {
					cancelAnimationFrame(animate);
				}
				if (countRepairsBase === 400) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			currentSlideRepairsBase--;
		}
	};


	const btnActive = (elem, index) => {
		elem.classList.toggle('active');
		[...repairTypesSlider.children].forEach((item, count) => {
			item.style.display = 'none';
			if (index === 0 && count === 0) {
				item.style.display = 'block';
			}
			if (index === 1 && count === 1) {
				item.style.display = 'block';
			}
			if (index === 2 && count === 2) {
				item.style.display = 'block';
			}
			if (index === 3 && count === 3) {
				item.style.display = 'block';
			}
			if (index === 4 && count === 4) {
				item.style.display = 'block';
			}
		});
	};

	const noBtnActive = () => {
		[...navListRepairElem.children].forEach(item => {
			item.classList.remove('active');
		});
	};
	const celarStyle = () => {
		sliderCounterContentCurrent.textContent = '1';
		countRepairs = 0;
		currentSlideRepairs = 0;
		repairTypesSliderSlide.forEach(item => {
			item.style.transform = `translateY(0%)`;
		});
	};
	rowReverseElem.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('button')) {
			noBtnActive();
			btnActive(target);
			[...target.parentElement.children].forEach((item, index) => {
				if (item.classList.contains('active') && index === 0) {
					celarStyle();
					sliderCounterContentTotal.textContent = typesRepair1.children.length;
					noBtnActive();
					btnActive(target, index);
				}
				if (item.classList.contains('active') && index === 1) {
					celarStyle();
					sliderCounterContentTotal.textContent = typesRepair2.children.length;
					noBtnActive();
					btnActive(target, index);
				}
				if (item.classList.contains('active') && index === 2) {
					celarStyle();
					sliderCounterContentTotal.textContent = typesRepair3.children.length;
					noBtnActive();
					btnActive(target, index);
				}
				if (item.classList.contains('active') && index === 3) {
					celarStyle();
					sliderCounterContentTotal.textContent = typesRepair4.children.length;
					noBtnActive();
					btnActive(target, index);
				}
				if (item.classList.contains('active') && index === 4) {
					celarStyle();
					sliderCounterContentTotal.textContent = typesRepair5.children.length;
					noBtnActive();
					btnActive(target, index);
				}
			});
		}
		if (target.closest('#repair-types-arrow_left')) {
			currentSlideRepairs--;
			[...navListRepairElem.children].forEach((item, index) => {
				if (item.classList.contains('active') && index === 0) {
					prevRepairs(typesRepair1, currentSlideRepairs);
				}
				if (item.classList.contains('active') && index === 1) {
					prevRepairs(typesRepair2, currentSlideRepairs);
				}
				if (item.classList.contains('active') && index === 2) {
					prevRepairs(typesRepair3, currentSlideRepairs);
				}
				if (item.classList.contains('active') && index === 3) {
					prevRepairs(typesRepair4, currentSlideRepairs);
				}
				if (item.classList.contains('active') && index === 4) {
					prevRepairs(typesRepair5, currentSlideRepairs);
				}
			});
		}
		if (target.closest('#repair-types-arrow_right')) {
			currentSlideRepairs++;
			[...navListRepairElem.children].forEach((item, index) => {
				if (item.classList.contains('active') && index === 0) {
					nextRepairs(typesRepair1, currentSlideRepairs, typesRepair1.children.length);
				}
				if (item.classList.contains('active') && index === 1) {
					nextRepairs(typesRepair2, currentSlideRepairs, typesRepair2.children.length);
				}
				if (item.classList.contains('active') && index === 2) {
					nextRepairs(typesRepair3, currentSlideRepairs, typesRepair3.children.length);
				}
				if (item.classList.contains('active') && index === 3) {
					nextRepairs(typesRepair4, currentSlideRepairs, typesRepair4.children.length);
				}
				if (item.classList.contains('active') && index === 4) {
					nextRepairs(typesRepair5, currentSlideRepairs, typesRepair5.children.length);
				}
			});
		}
		if (target.closest('#nav-arrow-repair-left_base')) {
			currentSlideRepairsBase--;
			prevRepairsBase(navListRepairElem, currentSlideRepairsBase);
		}
		if (target.closest('#nav-arrow-repair-right_base')) {
			currentSlideRepairsBase++;
			nextRepairsBase(navListRepairElem, currentSlideRepairsBase, navListRepairElem.children.length);
		}
	});
};


export default sliderReviews;
