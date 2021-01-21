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
        
        let bonkgif = ["https://media.giphy.com/media/30lxTuJueXE7C/source.gif", "https://media.giphy.com/media/hsgVkc6mJZV1DLMMFG/giphy.gif", "https://media.giphy.com/media/dQbAV1HS6gVu4Cxwxi/giphy.gif", "https://tenor.com/boRZh.gif", "https://media.giphy.com/media/3LPo87QppPBt8fnKQL/giphy.gif", "https://media.giphy.com/media/vXMEOB2aDPzEI/giphy.gif"];
        let randombonk = Math.floor(Math.random() * 6);

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
