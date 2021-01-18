
const tabsWork = () => {
	const wrapper = document.querySelector('#scheme-list');
	const schemeSliderSlide = document.querySelectorAll('.scheme-slider__slide');
	const schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block');

	const addActiveClass = (arr, ind, activeClass) => {
		arr.forEach((item, i) => {
			item.classList.remove(activeClass);
			if (i === ind) {
				item.classList.add(activeClass);
			}
		});
	};

	wrapper.addEventListener('click', e => {
		const target = e.target;
		if (target.tagName === 'BUTTON') {
			[...wrapper.children].forEach((item, i) => {
				item.classList.remove('active');
				if (item === target) {
					item.classList.add('active');
					addActiveClass(schemeSliderSlide, i, 'scheme-slider__slide--active');
					addActiveClass(schemeDescriptionBlock, i, 'visible-content-block');
				}
			});
		}
	});
	addActiveClass(schemeSliderSlide, 0, 'scheme-slider__slide--active');


	// class Slider {
	// 	constructor({
	// 		num,
	// 	}) {
	// 		this.num = num;
	// 	}
	// 	addEvents() {
	// 	}
	// 	addClasses() {
	// 	}
	// 	removeClasses() {
	// 	}
	// 	removeEvents() {
	// 	}
	// 	init() {
	// 		console.log(this.num);
	// 	}
	// 	destroy() {
	// 		console.log(this.num * 2);
	// 	}
	// }

	// const test = new Slider({
	// 	num: 4,
	// 	hren: 546584

	// });

	// const doTest = () => {
	// 	if (innerWidth < 900) {
	// 		test.init();
	// 	} else {
	// 		test.destroy();
	// 	}
	// };

	// doTest();

	// window.addEventListener('resize', doTest);


};
export default tabsWork;
