module.exports = {
    name: 'helpmod',
    description: "Help: Mod Command",
    execute(message, args, Discord) {

    
    
        const helpmod = new Discord.MessageEmbed()

        .setTitle("Help")
        .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
        .setColor('99ffeb')
        .setDescription("Hey! I'm Sheepo, a bot developed by Killeration and Gronky, exclusively for this MrSuicideSheep Discord Server! \n \n Here are the moderation commands!")
        .addFields(
            { name: '.help', value: 'I\'m the help command lol' },
            { name: '.kick', value: 'Kicks a member, only for Mods and Admins [.kick (Username)]' },
            { name: '.ban', value: 'Bans a member, only for Mods and Admins [.ban (Username)]'  },
            { name: '.mute', value: 'Mutes a member, only for Mods and Admins [.mute (Username)]'},
            { name: '.tempmute / .tmute', value: 'Mutes a member, only for Mods and Admins [.tempmute (Username)] or [.tmute (Username)]'},
            { name: '.purge', value: 'Clears upto 100 messages [.purge (Number of messages)]'},
            { name: '.clear', value: 'Clears upto 100 messages which don\'t have attachments [.clear (Number of messages)]'},
            { name: '.slowmode / .sm ', value: 'Sets or disables slowmode on a channel, only for Mods and Admins [.slowmode (Time in Seconds)] or [.sm (Time in Seconds)]'},
            )

            message.channel.send(helpmod)
        }

}
