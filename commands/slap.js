module.exports = {
    name: 'slap',
    description: "Slap a Member",
    execute(message, args, Discord){

        const mentions = message.mentions.users.size;

        if(!mentions)
        {
            message.channel.send('Hey, who do u wanna slap?');
        }




        else{
        let slap = ["Get Slapped Kid!", "Haha slap go brrrrr", "Aha SLAPPED!", "Slapped to shame hahahhaha", "*SLAP*"];
        let slapr = Math.floor(Math.random() * 5);
        
        let slapgif = ["https://media.giphy.com/media/j3iGKfXRKlLqw/giphy.gif", "https://media.giphy.com/media/RrLbvyvatbi36/giphy.gif", "https://media.giphy.com/media/vlH0dqH8DiZa0/giphy.gif", "https://media.giphy.com/media/WLXO8OZmq0JK8/giphy.gif", "https://media.giphy.com/media/3o84skA6NkEvJg4LlK/giphy.gif"];
        let randomslap = Math.floor(Math.random() * 5);

        let slapped = slap[slapr];
        let slaprgif = slapgif[randomslap];
    



        const slapp = new Discord.MessageEmbed() 

        .setColor('00FFEC')
        .setTitle((message.author.username)+" Slapped 🖐️ "+(message.mentions.members.first().displayName))
        .setDescription(slapped)
        .setImage(slaprgif)


        message.channel.send(slapp);
        }
    }



    }
