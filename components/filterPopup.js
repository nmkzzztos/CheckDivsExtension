// Создаем div элемент, который будет содержать нашу форму
const filterPopup = document.createElement('div');

// Создаем заголовок
const titleElement = document.createElement('h3');
titleElement.textContent = 'Welche Aufträge gefiltert werden müssen';

// Создаем input элемент
const inputElement = document.createElement('input');
inputElement.type = 'text';

// Создаем Placeholder для input элемента
inputElement.placeholder = 'PQD PQE PLC...';

// Создаем кнопку
const buttonElement = document.createElement('button');
buttonElement.textContent = 'Accept';

// Добавляем элементы
filterPopup.appendChild(titleElement);
filterPopup.appendChild(inputElement);
filterPopup.appendChild(buttonElement);


// Styles
filterPopup.style.width = '300px';
filterPopup.style.height = '120px';
filterPopup.style.backgroundColor = '#fff';
filterPopup.style.position = 'fixed';
filterPopup.style.top = '50%';
filterPopup.style.left = '50%';
filterPopup.style.transform = 'translate(-50%, -50%)';
filterPopup.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.1)';
filterPopup.style.display = 'none';
filterPopup.style.flexDirection = 'column';
filterPopup.style.alignItems = 'center';
filterPopup.style.justifyContent = 'center';
filterPopup.style.overflow = 'auto';
filterPopup.style.borderRadius = '20px';

inputElement.style.marginBottom = '10px';

// Добавляем обработчик события на кнопку
buttonElement.addEventListener('click', () => {
    console.log(inputElement.value);
    filterPopup.style.display = 'none';

    if(inputElement.value !== '') {
        filter = inputElement.value;
    }
    console.log(filter);
});

// Добавляем div элемент в body
document.body.appendChild(filterPopup);
