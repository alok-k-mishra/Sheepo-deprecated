module.exports = {
    name: 'pat',
    description: "Pat a Member",
    execute(message, args, Discord){

        const mentions = message.mentions.users.size;

        if(!mentions)
        {
            message.channel.send('Hey, who do u wanna pat?');
        }




        else{
        let pat = ["Pat Pat!", "Feel Better!!", "Pats but don\'t die", "Soft Pats :p"];
        let patrandom = Math.floor(Math.random() * 3);
        
        let patgif = ["https://media.giphy.com/media/3o7TKvargxFJiHyf6M/giphy.gif", "https://media.giphy.com/media/3oFzmm13V0h44D61bi/giphy.gif", "https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif", "https://media.giphy.com/media/l1J9xstBnUfcTJ9iU/giphy-downsized-large.gif", "https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif", "https://media.giphy.com/media/uw3fTCTNMbXAk/giphy.gif", "https://media.giphy.com/media/Z7x24IHBcmV7W/giphy.gif"];
        let randompat = Math.floor(Math.random() * 7);

        let patr = pat[patrandom];
        let patgr = patgif[randompat];
    



        const pats = new Discord.MessageEmbed() 

        .setColor('00FFEC')
        .setTitle((message.author.username)+" pats "+(message.mentions.members.first().displayName))
        .setDescription(patr)
        .setImage(patgr)


        message.channel.send(pats);
        }
    }



    }
