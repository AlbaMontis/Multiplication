$(document).ready(function() {
	var firstNum = $('#firstNum').text(Math.floor((Math.random() * 10) + 1));
	var secondNum = $('#secondNum').text(Math.floor((Math.random() * 10) + 1));
	var mult = +firstNum.text() * +secondNum.text();
	var coins = localStorage.getItem('sum') || 0;
	var ans;

  $('#coin').text(coins);

	$('#submit').click(function() {
		ans = $('#solution').val();
		if (mult == ans) {
			$('#feedback').text('Вірно! Молодець!');
			$('#coin').text(coins=+coins+10);
			localStorage.setItem('sum', coins);
		} else {
			$('#feedback').text('Не вірно. Спробуй ще раз.');
		}
	});

	$('#next').click(function() {
    location.reload(false);
	});
	
});