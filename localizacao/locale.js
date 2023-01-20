//Formatação de data com Intl.Locale - exibe o ano
const date = new Date();
console.log(date);
const dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric' });
console.log(dateFormat.format(date));

//Formatação de data
const meuAniversario = '1988-08-21';
const dataCriada = new Date(meuAniversario);
const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
	timeZone: 'UTC',
});
console.log(`Meu aniversário é ${dataFormatada}`);

//Formatação data completa de hoje
const hoje = new Date();
const dataFormat = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' });
console.log(dataFormat.format(hoje));

//Formatar tempo relativo com idioma do lugar

const brazilOla = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });
console.log(brazilOla.format(2, 'month'));
