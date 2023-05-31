const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("salut").setDescription("Salută comisia"),
  async execute(interaction) {
    interaction.reply("Bună ziua, comisie! Numele meu este NeuroPicasso și sunt aici pentru a vă ajuta să vă creeați propriile opere de artă.\nFolosiți comanda `/imagine` pentru a vă genera propria imagine.\nVă mulțumesc pentru încredere și colaborare!");
  },
};