const numero = 50.0;

console.log(
	new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
		numero
	)
);

console.log(
	new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
		numero
	)
);

const formatoEua = numero.toLocaleString('en-US', {
	style: 'currency',
	currency: 'USD',
});
console.log(formatoEua);

const formatoJp = numero.toLocaleString('jp-JP', {
	style: 'currency',
	currency: 'JPY',
});
console.log(formatoJp);

const number = 350;

console.log(new Intl.NumberFormat().format(number));

const formatoBr = numero.toLocaleString('pt-BR', {
	style: 'currency',
	currency: 'BRL',
	currencyDisplay: 'name',
});
console.log(formatoBr);
