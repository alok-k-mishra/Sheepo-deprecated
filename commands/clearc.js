const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clearc',
    description: "Clear Messages which dont have attachments",
    async execute(message, args, Discord) {
      

      if(!args[0]) return message.reply("Please specify the number of messages(1-100) to be purged!");
      if(isNaN(args[0])) return message.reply("Please enter a real number!");
      if(args[0] > 100) return message.reply("Please enter a number between 1-100");
      if(args[0] < 1) return message.reply("Please enter a number between 1-100");



    
      message.delete()
            
      await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        const noATT = messages.filter(messages => messages.attachments.size === 0);
        message.channel.bulkDelete(noATT);

        const clear = new Discord.MessageEmbed()
        
        .setColor('733BAE')
        .setTitle("Cleared "+ args[0] + " messages")
        .setFooter("Happily moderating MrSuicideSheep server :D")
        .setTimestamp()

        message.channel.send({ embeds: [clear] });
      
      })

    

    }


}