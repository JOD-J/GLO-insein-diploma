/* eslint-disable max-len */

const burgerMenuAdaptive = () => {
	const popupMenuElem = document.querySelector('.popup-menu');

	const animateBurgerMenu = () => {
		let count = 0;
		const go = () => {
			if (window.innerWidth > 576) {
				count += 15;
				console.log('window.innerWidth: ', window.innerWidth);
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
		const animationTime = 500,
			framesCount = 100;
		const coordY = document.querySelector(elem.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
		const scroller = setInterval(() => {
			const scrollBy = coordY / framesCount;
			if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
				window.scrollBy(0, scrollBy);
			} else {
				window.scrollTo(0, coordY);
				clearInterval(scroller);
				CloseBurgerMenu();
			}
		}, animationTime / framesCount);
	};

	document.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;
		if (target.matches('.menu__icon')) {
			animateBurgerMenu();
		}
		if (target.closest('.close')) {
			CloseBurgerMenu();
		}
		if (target.closest('.popup-menu-nav__item')) {
			scrollBurgerMenu(target);
		}
	});
};

export default burgerMenuAdaptive;
