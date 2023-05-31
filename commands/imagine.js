const {
  SlashCommandBuilder,
  AttachmentBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");
const { generateImage } = require("../src/generateImage");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("imagine")
    .addStringOption((option) =>
      option
        .setName("prompt")
        .setDescription("The prompt for the image")
        .setRequired(true)
    )
    .setDescription("Imagine an image!"),
  async execute(interaction) {
    const prompt = interaction.isButton()
      ? interaction.customId
      : interaction.options.getString("prompt");

    await interaction.deferReply();
    const { file } = await generateImage(interaction.id, prompt);
    const embed = {
      title: "Made by @" + interaction.user.tag, // Discord tag
      description: prompt, // Prompt
      image: {
        url: "attachment://image.jpg",
      },
    };

    await interaction.editReply({
      embeds: [embed],
      files: [new AttachmentBuilder(file, "image.jpg")],
      components: [
        new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setCustomId(prompt)
            .setLabel("Try again!")
            .setStyle(ButtonStyle.Primary)
            .setEmoji("🔁")
        ),
      ],
    });
  },
};
