const { EmbedBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { REST } = require("@discordjs/rest");

const { 
    ButtonBuilder,
    InteractionType,
    ModelBuilder,
    Routes,
    SelectMenuBuilder,
    TextInputBuilder,
    TextInputStyle } = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
  .setName("music")
  .setDescription("Add a music player embed with buttons."),
/**
 * 
 * @param { ChatInputCommandInteraction } interaction 
 */
async execute(interaction, message, client){
        
    const music = new EmbedBuilder()
    .setTitle("Music Player for MrSuicideSheep Discord")
    .setColor("5DFF00")
    .setImage("https://external-preview.redd.it/jK3ifzXzpeZq4xUCjJfDccxU409jrLdDIhuPH7fACEA.jpg?auto=webp&s=47e117e8a7d07839e2f3872366aea64e97a04834")
    .setDescription("Send a search term, or a link")

    await interaction.reply({
      embeds: [music] ,
      components: [
        new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId('Stop')
                .setLabel('⏹️ Stop')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('Play Next')
            .setLabel('⏭️ Next')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId('Queue')
            .setLabel('📃 Queue')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setLabel('Link to YouTube Video')
            .setStyle(ButtonStyle.Link)
            .setURL('https://www.youtube.com/watch?v=f6ddxmQoVmM'),
      )
        ],
      ephemeral: false
})


  },
}
