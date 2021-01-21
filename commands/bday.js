module.exports = {
    name: 'bday',
    description: "Wish a Member on their birthday",
    execute(message, args, Discord){
        
        const mentions = message.mentions.users.size;

        if(!mentions)
        {
            message.channel.send('Hey, who\'s birthday is it?');
        } else {



        const bday = new Discord.MessageEmbed()

        .setColor('00FFEC')
        .setTitle("Yoooo " + (message.mentions.members.first().displayName) + " it\'s ur bday!!!! " )
        .setDescription("Happy birthday!!!! Have a good year ahead! :hugging:")

        message.channel.send(bday);
        }
    }


    }
