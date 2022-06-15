import { SlashCommandSubcommandBuilder } from '@discordjs/builders';

export default {
	...new SlashCommandSubcommandBuilder()
		.setName('toggle')
		.setDescription('Pozwala na wyłączenie lub włączenie filtra')
		.addStringOption(string =>
			string.setName('setting')
				.setDescription('Wybranie edytowanego ustawienia')
				.addChoices(
					{ name: 'antyPhishing', value: 'antyPhishing' },
					{ name: 'antyInvite', value: 'antyInvite' },
				)
				.setRequired(true),
		)
		.addBooleanOption(boolean =>
			boolean.setName('enabled')
				.setDescription('Pozwala na wyłączenie lub włączenie filtra')
				.setRequired(true),
		)
		.toJSON(),
	async execute(interaction) {
		interaction.reply(JSON.stringify(interaction.options));

	},
};