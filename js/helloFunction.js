var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow >= 18) {
	greeting = 'Olá, Boa noite';
} else if (hourNow  >= 12) {
	greeting = 'Olá, Boa tarde';
} else if (hourNow  >= 0) {
	greeting = 'Olá, Bom dia';
}
document.write( greeting );