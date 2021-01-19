module.exports = {
    name: 'help',
    description: "Help Command",
    execute(message, args, Discord) {

    const help = new Discord.MessageEmbed()

        .setTitle("Help")
        .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
        .setColor('99ffeb')
        .setDescription("Hey, I'm SheepyMod, a mod bot developed by Killeration, exclusively for MrSuicideSheep Server, this server is still in developement! :D")
        .addFields(
            { name: '.help', value: 'I\'m the help command lol' },
            { name: '.kick', value: 'Kicks a member, only for Mods and Admins [.kick (Username)]' },
            { name: '.ban', value: 'Bans a member, only for Mods and Admins [.ban (Username)]'  },
            { name: '.mute', value: 'Mutes a member, only for Mods and Admins [.mute (Username)]'},
            { name: '.tempmute / .tmute', value: 'Mutes a member, only for Mods and Admins [.tempmute (Username)] or [.tmute (Username)]'},
            { name: '.purge', value: 'Clears upto 100 messages [.purge (Number of messages)]'},
            { name: '.clear', value: 'Clears upto 100 messages which don\'t have attachments [.clear (Number of messages)]'},
            { name: '.slowmode / .sm ', value: 'Sets or disables slowmode on a channel, only for Mods and Admins [.slowmode (Time in Seconds)] or [.sm (Time in Seconds)]'},
            { name: '.playlist / .playlists', value: 'Sends Official Playlists' },
            { name: '.youtube / .yt', value: 'Sends Official YouTube channel link for MrSuicideSheep' },
            
            )

        .setFooter("Happily Moderating MrSuicideSheep Server :D")
        .setThumbnail("https://yt3.ggpht.com/ytc/AAUvwni9ZWFXKGIHTNLSrRuXjckOTQ_lgbHRPx9ylBU3PA=s900-c-k-c0x00ffffff-no-rj")
        .setTimestamp()
    
message.channel.send(help)


}

}