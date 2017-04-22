var a = prompt('Podaj pierwszą zmienną'),
	b = prompt('Podaj drugą zmienną'),
	value = (a * a) + (2 * a * b) - (b * b);
alert('Wynik równania ze zmiennymi a: ' + a + ' i b: ' + b + ' wynosi: ' + value);
console.log('Wynik równania ze zmiennymi a: ' + a + ' i b: ' + b + ' wynosi: ' + value);

if (value > 0) {

    alert('Wynik jest dodatni');
    console.log('Wynik jest dodatni');

} else {

	alert('Wynik jest ujemny');
    console.log('Wynik jest dodatni');
    
};