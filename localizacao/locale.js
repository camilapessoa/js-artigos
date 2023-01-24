//Formatação de data com Intl.Locale - exibe o ano
const date = new Date();
console.log(date);
const dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric' });
console.log(dateFormat.format(date));

//Formatação de data

//Formatação data completa de hoje
const hoje = new Date();
const dataFormat = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' });
console.log(dataFormat.format(hoje));

//Formatar tempo relativo com idioma do lugar

const tempoRelativo = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });
console.log(tempoRelativo.format(2, 'month'));
