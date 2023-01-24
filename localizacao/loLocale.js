const novaData = new Date(Date.UTC(2023, 09, 20, 10, 11, 08));
console.log(novaData);
console.log(novaData.toLocaleString('pt-BR', { timezone: 'UTC' }));

const dataComIntl = new Intl.DateTimeFormat('pt-BR', {
	dateStyle: 'short',
	timeStyle: 'long',
	timeZone: 'America/Belem',
});
console.log(dataComIntl.format(novaData));
