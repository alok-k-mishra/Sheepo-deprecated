// const { EmbedBuilder, MembershipScreeningFieldType } = require("discord.js");
// const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

// module.exports = {
//   data: new SlashCommandBuilder()
//   .setName("ban")
//   .setDescription("Ban Member.")
//   .addUserOption(option =>
// 	  option.setName('target').setDescription('The member to ban')
//           .setRequired(true))

//   .addStringOption(option =>
//     option.setName('reason').setDescription('Reason to ban')
//           .setRequired(false))
	
//           .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),

// /**
//  * 
//  * @param { ChatInputCommandInteraction } interaction 
//  */
// async execute(interaction, message, client){

//   const user = interaction.options.getUser('target');
//   const banreason = interaction.options.getString('reason')
//   guild.members.ban(user)
//   .reason(banreason);

//     const ban = new EmbedBuilder()
//     .setColor('FB542B')
//     .setTitle("Successfully Banned " + $(interaction.options.get('target').value)  + " :BanHammer:")
//     .setDescription("Reason: "+ banreason)
//     .setFooter("Happily moderating MrSuicideSheep server :D")

//     await interaction.reply({
//       embeds: [ban] ,
//       ephemeral: true
    
// })}


  
// }
