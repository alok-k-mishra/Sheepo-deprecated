const { MessageEmbed } = require("discord.js");
var Scraper = require("images-scraper");


const google = new Scraper({
    puppeteer: {
      headless: true,
    },
  });


module.exports = {
    name: 'doggo',
    description: 'Get random dog pics',
    async execute(client, message, Discord){

        const browser = await puppeteer.launch({ args: ['--no-sandbox']});

        const dog_images = await google.scrape('cutedogsss', 1);

        const randomdog = Math.floor(Math.random() * 100);

        const doggooo = dog_images[randomdog]

        const doggo = new Discord.MessageEmbed()

        .setTitle("Doggoooo")
        .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
        .setImage(randomdoggo)


        message.channel.send(doggooo)

        browser.close();
    }
}