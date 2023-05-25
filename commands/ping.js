const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("salut").setDescription("Salută comisia"),
  async execute(interaction) {
    interaction.reply("Salutare, comisie! Folosiți comanda /imagine pentru a vă genera propria imagine. Vă mulțumesc pentru încredere și colaborare!");
  },
};
