const { MessageEmbed } = require("discord.js");
var scraper = require("images-scraper");

const google = new Scraper({
    puppeteer: {
      headless: true,
    },
  });


module.exports = {
    name: 'doggo',
    description: 'Get random dog pics',
    async execute(client, message, Discord){
        const dog_images = await google.scrape('cute doggo', 100);

        const randomdog = Math.floor(Math.random() * 100);

        const doggo = new Discord.MessageEmbed()

        .setTitle("Doggoooo")
        .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
        .setImage(randomdoggo)


        message.channel.send(doggo)
    }
}