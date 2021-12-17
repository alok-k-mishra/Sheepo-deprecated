const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'doubt',
    description: "Doubt a Member",
    execute(message, args, Discord){

        const mentions = message.mentions.users.size;

        if(!mentions)
        {
            message.channel.send('Hey, who do u wanna bonk?');
        }




        else{
        let doubt = ["Sure bro, sureeeeeeee", "Lmao even I don\'t Believe you", "Aha doubttttttt!", "Maybeeeee O_O", "X to Doubt"];
        let random = Math.floor(Math.random() * 5);
        
        let doubtgif = ["https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif", "https://media.giphy.com/media/AgWQwLTByaABsBQ9Zf/giphy.gif", "https://media.giphy.com/media/7Jmtg4Dp5kziqLdfJl/giphy.gif", "https://media.giphy.com/media/YNkpGGMQwyo9Lh3WP2/giphy.gif", "https://media.giphy.com/media/118F7nEgnxapYQ/giphy.gif", "https://media.giphy.com/media/ANbD1CCdA3iI8/giphy.gif"];
        let randomdoubtg = Math.floor(Math.random() * 6);

        let doubtr = doubt[random];
        let doubtrgif = doubtgif[randomdoubtg];
    



        const doubted = new Discord.MessageEmbed() 

        .setColor('00FFEC')
        .setTitle((message.author.username)+" doubts "+(message.mentions.members.first().displayName))
        .setDescription(doubtr)
        .setImage(doubtrgif)


        message.channel.send({ embeds : [doubted]});
        }
    }



    }
