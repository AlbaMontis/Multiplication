$(document).ready(function() {
	var firstNum = $('#firstNum').text(Math.floor((Math.random() * 10) + 1));
	var secondNum = $('#secondNum').text(Math.floor((Math.random() * 10) + 1));
	var mult = parseInt(firstNum.text()) * parseInt(secondNum.text());
	var coins = parseInt(localStorage.getItem('sum')) || 0;
	var solution;

  $('#coin').text(coins);

	$('body').submit(function(event) {
		
		solution = $('#solution').val();
    
		if (mult == solution) {
			$('#coin').text(coins+5);
			localStorage.setItem('sum', coins+5);
			console.log(true);

		} else {
			event.preventDefault();
			console.log(false);
		}
	});
});