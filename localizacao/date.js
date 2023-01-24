//Formatação de data
const meuAniversario = '1988-08-21';
const dataCriada = new Date(meuAniversario);
const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
	timeZone: 'UTC',
});
console.log(`Meu aniversário é ${dataFormatada}`);

//formatação de data atual com locales
const novaData = new Date();
console.log(novaData);
console.log(novaData.toLocaleDateString('pt-BR'));
console.log(novaData.toLocaleDateString('ko-KR')); //coreano ano-mês-dia

//formatação de data atual com options, customizar resultados
const opcoes = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	timezone: 'UTC',
};
console.log(novaData.toLocaleDateString('pt-BR', opcoes));
console.log(novaData.toLocaleDateString('ko-KR', opcoes));
