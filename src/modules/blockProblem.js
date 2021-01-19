const blockProblem = () => {
	const problemsItemIcon = document.querySelectorAll('.problems-item__icon');

	const showPromt = (popup, item) => {
		const heightToTop = item.getBoundingClientRect().top - 10;
		popup.closest('.row').style.zIndex = '1000';
		if (heightToTop < popup.offsetHeight) {
			popup.style.bottom = `-${popup.offsetHeight + 20}px`;
			popup.style.zIndex = '1000';
			popup.classList.add('popup-before');
		} else {
			popup.style.bottom = '90px';
			popup.classList.remove('popup-before');
		}
		popup.style.visibility = 'visible';
		popup.style.opacity = '1';
	};

	const hidePromt = popup => {
		popup.style.visibility = 'hidden';
		popup.style.opacity = '0.1';
		popup.closest('.row').style.zIndex = '0';
	};



	problemsItemIcon.forEach(item => {
		item.addEventListener('mouseover', e => {
			const target = e.target.closest('.problems-item__icon');
			if (target) {
				showPromt(target.children[0], item);
			}
		});

		item.addEventListener('mouseout', e => {
			const target = e.target.closest('.problems-item__icon');
			if (target) {
				const popup = target.children[0];
				hidePromt(popup);
			}
		});
	});



	const problemsSliderWrap = document.querySelector('.problems-slider-wrap');
	const problemsSlider = document.querySelector('.problems-slider');
	let countProblem = 0;
	let countSlideProblem = 0;

	const addActiveClass = (arr, ind, activeClass) => {
		[...arr.children].forEach((item, i) => {
			item.classList.remove(activeClass);
			if (i === ind) {
				console.log('i: ', i);
				item.classList.add(activeClass);
			}
		});
	};

	const prevProblem = (elem, index) => {
		addActiveClass(elem, index, 'active-item');

		if (index >= 0) {
			const go = () => {
				countProblem -= 5;
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countProblem}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countProblem === 0) {
					cancelAnimationFrame(animate);
				}
				if (countProblem === 110) {
					cancelAnimationFrame(animate);
				}
				if (countProblem === 220) {
					cancelAnimationFrame(animate);
				}
				if (countProblem === 330) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideProblem = 0;
		}
	};

	const nextProblem = (elem, index) => {
		addActiveClass(elem, index, 'active-item');
		if (index <= elem.children.length - 1) {
			const go = () => {
				countProblem += 5;
				[...elem.children].forEach(item => {
					item.style.transform = `translateX(${-countProblem}%)`;
				});
				const animate = requestAnimationFrame(go);
				if (countProblem === 110) {
					cancelAnimationFrame(animate);
				}
				if (countProblem === 220) {
					cancelAnimationFrame(animate);
				}
				if (countProblem === 330) {
					cancelAnimationFrame(animate);
				}
			};
			requestAnimationFrame(go);
		} else {
			countSlideProblem--;
		}
	};



	problemsSliderWrap.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('#problems-arrow_left')) {
			countSlideProblem--;
			prevProblem(problemsSlider, countSlideProblem);
		}
		if (target.closest('#problems-arrow_right')) {
			countSlideProblem++;
			nextProblem(problemsSlider, countSlideProblem);
		}
	});
};

export default blockProblem;

