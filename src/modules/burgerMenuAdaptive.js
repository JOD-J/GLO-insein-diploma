/* eslint-disable max-len */

const burgerMenuAdaptive = () => {
	const popupMenuElem = document.querySelector('.popup-menu');
	const popupRepairTypes = document.querySelector('.popup-repair-types');

	const animateBurgerMenu = () => {
		let count = 0;
		const go = () => {
			if (window.innerWidth > 576) {
				count += 15;
				popupMenuElem.style.transform = `translateX(${-count}px)`;
				const animate = requestAnimationFrame(go);
				if (count === 645) {
					cancelAnimationFrame(animate);
				}
			} else {
				count += 1;
				popupMenuElem.style.transform = `translateY(${count}%)`;
				const animate = requestAnimationFrame(go);
				if (count === 100) {
					cancelAnimationFrame(animate);
				}
			}
		};
		requestAnimationFrame(go);
	};



	const CloseBurgerMenu = () => {
		popupMenuElem.style.transform = `translate(0, 0)`;
	};

	const scrollBurgerMenu = elem => {
		const scrollHeight = document.getElementById(elem.href.split('#')[1]).offsetTop;
		CloseBurgerMenu();
		window.scrollTo({ top: scrollHeight, behavior: 'smooth' });
	};

	const closeAllPopup = () => {
		const popup = document.querySelectorAll('.popup');
		popup.forEach(item => {
			item.classList.remove('visible');
		});
	};

	const openPopupRepairTypes = () => {
		popupRepairTypes.classList.add('visible');
	};

	document.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;
		if (target.matches('.menu__icon')) {
			animateBurgerMenu();
		}
		if (target.closest('.close')) {
			closeAllPopup();
			CloseBurgerMenu();
		}
		if (target.closest('.popup-menu-nav__item')) {
			scrollBurgerMenu(target);
		}
		if (target.closest('.button-footer')) {
			scrollBurgerMenu(target);
		}
		if (target.closest('.link-list-menu')) {
			CloseBurgerMenu();
			openPopupRepairTypes();
		}
		if (target.closest('.link-list-repair')) {
			CloseBurgerMenu();
			openPopupRepairTypes();
		}
		if (target.matches('.link-privacy')) {
			const popupPrivacy = document.querySelector('.popup-privacy');
			popupPrivacy.classList.add('visible');
		}
	});
};

export default burgerMenuAdaptive;
