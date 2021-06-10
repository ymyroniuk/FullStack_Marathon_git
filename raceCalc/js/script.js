window.addEventListener('load', function OnWindowLoaded() {
    // набор кнопок
    let signs = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '=', '.', 'C'
    ];
 
    // форма калькулятора
    let calc = document.getElementById('calc');
 
    // текстовое поле с математическим выражением
    let textArea = document.getElementById('inputVal');
 
    // Добавление кнопок к форме калькулятора
    signs.forEach(function (sign) {
        let signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calc.appendChild(signElement);
    });
 
    // проходит по всем кнопкам калькулятора
    // добавляет обработчик на клик
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        // Добавляем действие, выполняемое при клике на любую кнопку
        button.addEventListener('click', onButtonClick);
    });
    //отключить клаву
    document.onkeydown = function () {
        return false;
    }

    // функция клика по кнопке калькулятора
    function onButtonClick(event) {
        // event - MouseEvent (содержит информацию о клике)
        if (event.target.innerHTML === 'C') {
            // Если нажата кнопка "с", то стирает все из текстового поля
            textArea.innerHTML = '0';
        }
        else if (event.target.innerHTML === '=') {
            // Если нажата кнопка "=", то, приведя выражение
            // в текстовом поле к javascript, вычислить значение
            textArea.innerHTML = eval(textArea.innerHTML);
        }
        else if (textArea.innerHTML === '0') {
            // Если textarea содержит только "0", то
            // стереть "0" и записать
            // значения кнопки в текстовое поле
            textArea.innerHTML = event.target.innerHTML;
        }
        else {
            // Добавление значения кнопки в текстовое поле
            textArea.innerHTML += event.target.innerHTML;
        }
    }
});