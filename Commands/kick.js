const { EmbedBuilder, MembershipScreeningFieldType, GuildMemberManager } = require("discord.js");
const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("kick")
  .setDescription("Kick a Member.")
  .addUserOption(option =>
	  option.setName('target').setDescription('The member to kick')
          .setRequired(true))

  .addStringOption(option =>
    option.setName('reason').setDescription('Reason to kick')
          .setRequired(false))
	
          .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),

/**
 * 
 * @param { ChatInputCommandInteraction } interaction 
 */
async execute(interaction, message, client){

  const user = interaction.options.getUser('target');
  const kickreason = interaction.options.getString('reason');

  user.kick(kickreason);

    const kick = new EmbedBuilder()
    .setColor('FB542B')
    .setTitle("Successfully Kicked " + $(interaction.options.get('target').value)  + " :BanHammer:")
    .setDescription("Reason: "+ kickreason)
    .setFooter("Happily moderating MrSuicideSheep server :D")

    await 


    interaction.reply({
      embeds: [kick] ,
      ephemeral: true
    
})}


  
}
