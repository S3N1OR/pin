function myFunction(boxNumber) {
  var copyText = document.querySelectorAll("input")[boxNumber - 1];

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}

// Получаем все поля ввода
var inputs = document.querySelectorAll('.input');

// Функция для добавления обработчиков событий
function addInputEventHandlers(input, index) {
  input.addEventListener('input', function() {
    localStorage.setItem('input_' + index, input.value);
  });

  // Восстанавливаем значения полей ввода из локального хранилища
  var inputValue = localStorage.getItem('input_' + index);
  if (inputValue) {
    input.value = inputValue;
  }
}

// Добавляем обработчики событий для каждого поля ввода
for (var i = 0; i < inputs.length; i++) {
  addInputEventHandlers(inputs[i], i);
}
