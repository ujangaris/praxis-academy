// for statement

var select = document.getElementById('mySelect')
var button = document.getElementById('showSelection')
button.addEventListener('click', function () {
  for (var i = 0; i < select.options.length; i++) {
    var option = select.options[i]
    if (option.selected) {
      alert('Pilihan yang dipilih: ' + option.value)
      //   document.getElementById('result').innerHTML =
      //     'Pilihan yang dipilih: ' + option.value
    }
  }
})
