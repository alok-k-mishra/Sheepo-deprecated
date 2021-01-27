module.exports = {
    name: 'doggo',
    description: 'Get random dog pics',
    async execute(client, message, Discord){


        const doggooo = new Discord.MessageEmbed()

        .setTitle("Doggoooo")
        .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
        .setImage(randomdoggo)


        message.channel.send(doggooo)


    }
}