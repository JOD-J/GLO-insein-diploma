/* eslint-disable max-len */
const formsSubmit = () => {
	const popupThank = document.querySelector('.popup-thank');

	const validateForm = form => {
		const set = new Set();
		const elementsForm = [...form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'button');
		elementsForm.forEach(item => {
			if (item.name === 'phone') {
				// здесь удаляем класси для отображения не валидности поля
				if (/^\+?[78]\s([-()\s]*\d){10}$/.test(item.value)) {
					set.delete(item);
				} else {
					// добавляем класс не валидности поля
					set.add(item);
				}
			}

			if (item.name === 'name') {
				if (/^[а-яА-Я\s]+$/gi.test(item.value)) {
					item.style.background = 'transparent';
					set.delete(item);
				} else {
					item.style.background = 'red';
					set.add(item);
				}
			}

			if (item.getAttribute('type') === 'checkbox') {
				if (item.checked) {
					set.delete(item);
					// здесь вставляем класси для отображения валидности оля
				} else {
					// здесь убираем класси для отображения валидности оля
					set.add(item);
				}
			}
		});
		return set;
	};

	const  postData = body => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	const clearInput = form => {
		const elementsForm = [...form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'button');
		elementsForm.forEach(item => {
			item.value = '';
		});
	};

	const checkForms = elem => {
		const formData = new FormData(elem);
		const body = {};
		for (const val of formData.entries()) {
			body[val[0]] = val[1];
		}
		postData(body)
			.then(response => {
				if (response.status !== 200) {
					throw new Error('Что то пошло не так');
				}
				// код открытия popup после отправки формы
			})
			.catch(error => {
				console.log(error);
			});
	};

	document.addEventListener('submit', event => {
		event.preventDefault();
		const target = event.target;
		validateForm(target);
		if (!validateForm(target).size) {
			popupThank.classList.add('visible');
			clearInput(target);
			checkForms(target);
		}
	});
};

export default formsSubmit;
