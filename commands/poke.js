module.exports = {
    name: 'poke',
    description: "Poke a Member",
    execute(message, args, Discord){

        const mentions = message.mentions.users.size;

        if(!mentions)
        {
            message.channel.send('Hey, who do u wanna poke?');
        }




        else{
        
        let pokegif = [
                        "https://media.giphy.com/media/xT5LMCwEucQV9YBJeM/giphy.gif",
                        "https://media.giphy.com/media/BlS0XPVcic57W/giphy.gif",
                        "https://media.giphy.com/media/PkR8gPgc2mDlrMSgtu/giphy.gif",
                        "https://media.giphy.com/media/Vfie0DJryAde8/giphy.gif",
                        "https://media.giphy.com/media/d6Knl7IbYdfbqJfoYd/giphy.gif",
                        "https://media.giphy.com/media/FXl1pSZh49lPW/giphy-downsized-large.gif"
                    
                    ];





        let randompoke = Math.floor(Math.random() * 6);

        let poked = poke[pokeR];
        let pokedRGif = pokegif[pokedRGif];
    



        const pokee = new Discord.MessageEmbed() 

        .setColor('00FFEC')
        .setTitle((message.author.username)+" Poked "+(message.mentions.members.first().displayName))
        .setDescription("Poke Poke")
        .setImage(pokedRGif)


        message.channel.send(pokee);
        }
    }



    }
