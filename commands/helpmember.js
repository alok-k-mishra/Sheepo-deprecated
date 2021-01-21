module.exports = {
    name: 'helpmember',
    description: "Help: Member Commands",
    execute(message, args, Discord) {const helpmem = new Discord.MessageEmbed()


        .setTitle("Help")
        .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
        .setColor('99ffeb')
        .setDescription("Hey, I'm SheepyMod, a mod bot developed by Killeration, exclusively for MrSuicideSheep Server, this bot is still in developement! :D \n \n Here are the fun commands members can use!")
        .addFields(
            { name: '.hug', value: 'Sends Hugs :p  [.hug / .hug (member)' },
            { name: '.slap', value: 'Slap yourself or a member [.slap / .slap (member)' },
            { name: '.bday', value: 'Wishes a user on their bday! [.wish (member)]' },
            { name: '.bonk', value: 'Bonk a member :p [.bonk (member)' },
            { name: '.doubt', value: 'Doubt a member :p [.doubt (member)' },
            { name: '.pat', value: 'Pat a member :D [.pat (member)' },
            { name: '.playlist / .playlists', value: 'Sends Official Playlists' },
            { name: '.youtube / .yt', value: 'Sends Official YouTube channel link for MrSuicideSheep' },
        )
            

        .setFooter("Happily Moderating MrSuicideSheep Server :D")
        .setThumbnail("https://yt3.ggpht.com/ytc/AAUvwni9ZWFXKGIHTNLSrRuXjckOTQ_lgbHRPx9ylBU3PA=s900-c-k-c0x00ffffff-no-rj")
        .setTimestamp()
    
    message.channel.send(helpmem);
   
   
   
    }

}