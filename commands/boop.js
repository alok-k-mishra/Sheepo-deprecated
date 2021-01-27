module.exports = {
    name: 'boop',
    description: "Boop a Member",
    execute(message, args, Discord){

        const mentions = message.mentions.users.size;

        if(!mentions)
        {
            message.channel.send('Hey, who do u wanna boop?');
        }




        else{
        
        let boopgif = [
                        "https://media.giphy.com/media/z4bzULYN9MCsM/giphy.gif",
                        "https://media.giphy.com/media/10MSCF1viNV7zy/giphy.gif",
                        "https://media.giphy.com/media/26FPF032XnQCUsw4E/giphy.gif",
                        "https://media.giphy.com/media/hSvBxxFsk0jhm/giphy.gif",
                        "https://media.giphy.com/media/aCqb9YW7QclN3rtto5/giphy-downsized-large.gif",
                        "https://media.giphy.com/media/WHv8f9Mt4wPNS/giphy-downsized-large.gif"

                    
                    
                    ];





        let randomboop = Math.floor(Math.random() * 6);

        let booprgif = boopgif[randomboop];
    



        const boopp = new Discord.MessageEmbed() 

        .setColor('00FFEC')
        .setTitle((message.author.username)+" Booped "+(message.mentions.members.first().displayName))
        .setDescription("Boop!")
        .setImage(booprgif)


        message.channel.send(boopp);
        }
    }



    }
