const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("scant").setDescription("Scant"),
  async execute(interaction) {
    interaction.reply("Scant love you!");
  },
};
