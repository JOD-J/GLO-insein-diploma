const sliderReviews = () => {
	const rowReverseElem = document.querySelector('.row_reverse');
	const navListRepairElem = document.querySelector('.nav-list-repair');
	const repairTypesSlider = document.querySelector('.repair-types-slider');

	const sliderCounterContentCurrent = document.querySelector('.slider-counter-content__current');
	const sliderCounterContentTotal = document.querySelector('.slider-counter-content__total');
	const typesRepair1 = document.querySelector('.types-repair1');
	const typesRepair2 = document.querySelector('.types-repair2');
	const typesRepair3 = document.querySelector('.types-repair3');
	const typesRepair4 = document.querySelector('.types-repair4');
	const typesRepair5 = document.querySelector('.types-repair5');

	console.log('repairTypesSlider.children: ', repairTypesSlider.children[0]);

	// repairTypesSlider.style.opacity = '0';
	[...repairTypesSlider.children].forEach(item => {
		repairTypesSlider.style.display = 'block';
		console.log('item: ', item);
		item.style.opacity = '0';
		item.style.display = 'block';

	});
	// const showRepairs = () => {
	// 	[...repairTypesSlider.children].forEach(item => {
	// 		console.log('item: ', item);
	// 		return item;
	// 	});
	// };
	// showRepairs();
	sliderCounterContentTotal.textContent = '5';
	let countRepairs = 0;
	let currentSlideRepairs = 0;

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

	const nextRepairs = (elem, index) => {
		console.log('elem: ', elem);
		if (index <= 4) {
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

	const btnActive = elem => {
		elem.classList.toggle('active');
	};

	const noBtnActive = () => {
		[...navListRepairElem.children].forEach(item => {
			item.classList.remove('active');
		});
	};

	// console.log(navListRepairElem.children);

	rowReverseElem.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('button')) {
			noBtnActive();
			btnActive(target);

		}
		if (target.closest('#repair-types-arrow_left')) {
			currentSlideRepairs--;
			prevRepairs(typesRepair1, currentSlideRepairs);
			// prevRepairs(typesRepair2, currentSlideRepairs);
			// prevRepairs(typesRepair3, currentSlideRepairs);
			// prevRepairs(typesRepair4, currentSlideRepairs);
			// prevRepairs(typesRepair5, currentSlideRepairs);

		}
		if (target.closest('#repair-types-arrow_right')) {
			currentSlideRepairs++;
			nextRepairs(typesRepair1, currentSlideRepairs);
			// prevRepairs(typesRepair2, currentSlideRepairs);
			// prevRepairs(typesRepair3, currentSlideRepairs);
			// prevRepairs(typesRepair4, currentSlideRepairs);
			// prevRepairs(typesRepair5, currentSlideRepairs);

		}
	});
};


export default sliderReviews;
