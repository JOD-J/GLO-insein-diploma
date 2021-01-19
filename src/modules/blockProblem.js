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


	problemsSliderWrap.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('.')) {

		}
	});
};

export default blockProblem;

