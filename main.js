function myFunction(boxNumber) {
  var copyText = document.querySelectorAll(".input")[boxNumber - 1];
  var dopCopyText = document.querySelectorAll('.dop')[boxNumber - 1];

  copyText.classList.add('anim');
  dopCopyText.classList.add('anim');
  setTimeout(function(){
    copyText.classList.remove('anim');
    dopCopyText.classList.remove('anim');
  }, 100)

  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value + dopCopyText.value);
}

var inputs = document.querySelectorAll('input');

function addInputEventHandlers(input, index) {
  input.addEventListener('input', function () {
    localStorage.setItem('input_' + index, input.value);
  });

  var inputValue = localStorage.getItem('input_' + index);
  if (inputValue) {
    input.value = inputValue;
  }
}

for (var i = 0; i < inputs.length; i++) {
  addInputEventHandlers(inputs[i], i);
}