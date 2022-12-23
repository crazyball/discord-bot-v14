const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

if (process.env.DEVMODE === 0) return;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping Pong tool"),
  async execute(interaction, client) {
    const fields = [
      {
        name: "API Latency",
        value: client.ws.ping.toString(),
        inline: true,
      },
      {
        name: "Client Ping",
        value: (Date.now() - interaction.createdTimestamp).toString(),
        inline: true,
      },
    ];
    const embed = new EmbedBuilder().setTitle("Ping Pong").addFields(...fields);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
