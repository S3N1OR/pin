function myFunction(boxNumber) {
  var copyText = document.querySelectorAll("input")[boxNumber - 1];

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
}