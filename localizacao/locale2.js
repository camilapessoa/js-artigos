const dataAtual = new Date();
console.log(dataAtual);
const dateFormat = new Intl.DateTimeFormat('pt-BR', {
	dateStyle: 'full',
	timeStyle: 'long',
	timeZone: 'America/Sao_Paulo',
});
console.log(dateFormat.format(dataAtual));

const portugues = new Intl.Locale('pt-BR', { hourCycle: 'h12' });
console.log(
	portugues.language,
	portugues.hourCycle,
	portugues.region,
	portugues.timeZones
);
