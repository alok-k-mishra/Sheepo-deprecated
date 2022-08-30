const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'helpmusic',
    description: "Help: Music Command",
    execute(message, args, Discord) {

    
    
        const helpmusic = new Discord.MessageEmbed()

        .setTitle("Music Commands!")
        .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
        .setColor('99ffeb')
        .setDescription("Music commands! 🤠")
        .addFields(
            { name: '.play / .p', value: 'Play music using links(Spotify, SoundCloud and Youtube) or just search queries!' },
            { name: '.pause', value: 'Pause music!' },
            { name: '.resume', value: 'Resume Music lol'  },
            { name: '.stop', value: 'Stop Music and Disconnect!'},
            { name: '.queue', value: 'Get queue!'}
        )
            message.channel.send({ embeds: [helpmusic] })
        }

}
