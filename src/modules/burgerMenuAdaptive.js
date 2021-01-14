/* eslint-disable max-len */
const burgerMenuAdaptive = () => {
	const menuBurElem = document.querySelector('.menu__icon'),
		popupMenuElem = document.querySelector('.popup-menu'),
		closeMenuElem = document.querySelector('.close-menu'),
		popupMenuNavItem = document.querySelectorAll('.popup-menu-nav__item>a');

		
	const animateBurgerMenu = () => {
		popupMenuElem.style.transform = `translate(0)`;
		let count = 0;
		const go = () => {
			if (window.innerWidth > 576) {
				console.log('window.innerWidth: ', window.innerWidth);
				count += 1;
				popupMenuElem.style.transform = `translate(${-count}%)`;
				const animate = requestAnimationFrame(go);
				if (count === 50) {
					cancelAnimationFrame(animate);
				}
			} else {
				console.log(' else window.innerWidth: ', window.innerWidth);
				count += 10;
				popupMenuElem.style.marginTop = `${count}px`;
				const animate = requestAnimationFrame(go);
				if (count === 740) {
					console.log('count: ', count);
					cancelAnimationFrame(animate);
				}
			}
		};
		requestAnimationFrame(go);
	};


	const CloseBurgerMenu = () => {
		popupMenuElem.style.transform = `translate(0)`;
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


	menuBurElem.addEventListener('click', () => {
		animateBurgerMenu();
	});


	popupMenuElem.addEventListener('click', event => {
		const target = event.target;
		event.preventDefault();

		if (target.matches('.close-menu')) {
			CloseBurgerMenu();
		}
		if (target.closest('.popup-menu-nav__item')) {
			scrollBurgerMenu(target);
		}
	});
};

export default burgerMenuAdaptive;
