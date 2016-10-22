$(document).ready(function() {
	var firstNum = $('#firstNum').text(Math.floor((Math.random() * 10) + 1));
	var secondNum = $('#secondNum').text(Math.floor((Math.random() * 10) + 1));
	var mult = parseInt(firstNum.text()) * parseInt(secondNum.text());
	var coins = parseInt(localStorage.getItem('sum')) || 0;
	var solution;

  $('#coin').text(coins);

	$('#submit').click(function(event) {
		event.preventDefault();
		solution = $('#solution').val();
    
		if (mult == solution) {
			$('#feedback').text('Вірно! Молодець!');
			$('#coin').text(coins+5);
			localStorage.setItem('sum', coins+5);

		} else {
			$('#feedback').text('Неправильно. Спробуй ще раз.');
		}
	});

	$('#next').click(function() {
    location.reload(false);
	});
	
});