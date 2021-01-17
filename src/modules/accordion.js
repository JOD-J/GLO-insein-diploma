const accordion = () => {

	const accordionElem = document.querySelector('.accordion');

	const showAccordion = elem => {
		elem.classList.toggle('msg-active');
	};

	accordionElem.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('.title_block')) {
			showAccordion(target);
		}
	});
};

export default accordion;
