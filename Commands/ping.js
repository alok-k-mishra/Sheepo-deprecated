const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { MessageEmbed }  = require('discord.js');

const ping = new MessageEmbed()
.setTitle("🏓 Pong!")
.setColor("5DFF00")
.setDescription("📡 Latency is " + (Date.now() - message.createdTimestamp) + " ms")

module.exports = {
  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Will respond with pong and message uptime."),
/**
 * 
 * @param { ChatInputCommandInteraction } interaction 
 */


execute(interactin){
  
     interactin.reply({content: { embeds: [ping] }, ephemeral: false
    })
    
  }

}
