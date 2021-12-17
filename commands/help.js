const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'help',
    description: "Help Command",
    execute(message, args, Discord) {

            const help = new Discord.MessageEmbed()
            .setTitle("Help")
            .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
            .setColor('99ffeb')
            .setDescription("Hey, I'm SheepyMod, a mod bot developed by Killeration and Gronky, exclusively for MrSuicideSheep Server, this bot is still in developement! :D \n \n There are two types of commands for this bot: ")
            .addFields(
                { name: '.helpmod', value: 'Get the Moderation commands' },
                { name: '.helpmember', value: 'Get the commands a member can use!' },
                { name : '.helpmusic', value: 'Get the commands for playing music!'}
            )
        
                message.channel.send({ embeds : [help] })
        }


        
        }






