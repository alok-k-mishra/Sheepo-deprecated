module.exports = {
    name: 'bonk',
    description: "Bonk a Member",
    execute(message, args, Discord){

        const mentions = message.mentions.users.size;

        if(!mentions)
        {
            message.channel.send('Hey, who do u wanna bonk?');
        }




        else{
        let replies = ["Get Bonked Kid!", "Haha bonk go brrrrr", "Aha BONKED!"];
        let random = Math.floor(Math.random() * 3);
        
        let bonkgif = [
                        "https://media.giphy.com/media/30lxTuJueXE7C/source.gif",
                        "https://media.giphy.com/media/hsgVkc6mJZV1DLMMFG/giphy.gif",
                        "https://media.giphy.com/media/dQbAV1HS6gVu4Cxwxi/giphy.gif",
                        "https://media.giphy.com/media/3LPo87QppPBt8fnKQL/giphy.gif",
                        "https://media.giphy.com/media/vXMEOB2aDPzEI/giphy.gif",
                        "https://media.giphy.com/media/iemTXGUyhwP99WZJGl/giphy.gif",
                        "https://media.giphy.com/media/W6RCCcTDM7VNtB2bfF/giphy.gif",
                        "https://media.giphy.com/media/xT0xerS8iYPhaIsy8E/giphy.gif",
                        "https://media.giphy.com/media/cY0UE4XtvWQcl9ErFD/giphy.gif",
                        "https://media.giphy.com/media/4NOXx8xUFk3jG/giphy.gif",
                        "https://media.giphy.com/media/KDPTsfyhGgIOKTElVa/giphy.gif",
                        "https://media.giphy.com/media/20vG9EXFtKq3h8Ai0x/giphy.gif",
                        "https://media.giphy.com/media/3UI4X7k1922JO/giphy.gif"                
                    
                    ];
        
        
        
        
        
        
        
        let randombonk = Math.floor(Math.random() * 13);

        let bonked = replies[random];
        let bonkedgif = bonkgif[randombonk];
    



        const bonk = new Discord.MessageEmbed() 

        .setColor('00FFEC')
        .setTitle((message.author.username)+" bonked 🗞️ "+(message.mentions.members.first().displayName))
        .setDescription(bonked)
        .setImage(bonkedgif)


        message.channel.send(bonk);
        }
    }



    }
