const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'helpmember',
    description: "Help: Member Commands",
    execute(message, args, Discord) {
        
        const helpmem = new Discord.MessageEmbed()

        .setTitle("Help")
        .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
        .setColor('99ffeb')
        .setDescription("Hey, I'm SheepyMod, a mod bot developed by Killeration and Gronky, exclusively for MrSuicideSheep Server, this bot is still in developement! :D \n \n Here are the fun commands members can use!")
        .addFields(
            { name: '.hug', value: 'Sends Hugs :p  [.hug / .hug (member)' },
            { name: '.slap', value: 'Slap yourself or a member [.slap / .slap (member)' },
            { name: '.bday', value: 'Wishes a user on their bday! [.wish (member)]' },
            { name: '.bonk', value: 'Bonk a member :p [.bonk (member)' },
            { name: '.doubt', value: 'Doubt a member :p [.doubt (member)' },
            { name: '.doggo', value: 'Get random dog gifs!' },
            { name: '.catto', value: 'Get random cat gifs!' },
            { name: '.animal', value: 'Get random animal gifs!' },
            { name: '.birb', value: 'Get random cute bird gifs!' },
            { name: '.boop', value: 'Boop a member :p [.boop (member)' },
            { name: '.poke', value: 'Poke a member :p [.poke (member)' },
            { name: '.pat', value: 'Pat a member :D [.pat (member)' },
            { name: '.rosie', value: 'rosie.' },
            { name: '.playlist / .playlists', value: 'Sends Official Playlists' },
            { name: '.youtube / .yt', value: 'Sends Official YouTube channel link for MrSuicideSheep' },
        )
            

        .setFooter("Happily Moderating MrSuicideSheep Server :D")
        .setThumbnail("https://yt3.ggpht.com/ytc/AAUvwni9ZWFXKGIHTNLSrRuXjckOTQ_lgbHRPx9ylBU3PA=s900-c-k-c0x00ffffff-no-rj")
        .setTimestamp()
    
    message.channel.send({ embeds: [helpmem]});
   
   
   
    }

}
