module.exports = {
    name: 'about',
    description: "Help Command",
    execute(message, args, Discord) {

            const about = new Discord.MessageEmbed()
            .setTitle("About Sheepo")
            .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
            .setColor('99ffeb')
            .setDescription("Hi! I'm Sheepo, a moderation bot developed by Killeration and Gronky, exclusively for the MrSuicideSheep Discord Server! :D \n \n There are two types of commands for this bot: ")
            .addFields(
                { name: '.helpmod', value: 'Get the Moderation commands' },
                { name: '.helpmember', value: 'Get the commands a member can use!' },
            )
        
            message.channel.send(about)
    }


        
}
