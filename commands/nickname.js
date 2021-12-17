const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'nickname',
    description: "Change Member's nickname",
    execute(message, args, Discord) {

        message.delete();
        
            const target = message.mentions.users.first();

            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
        
           


        var nickname = args.join(" ").slice(22);
        if (!nickname){
            message.reply("Hey provide a nickname");
        }

        if(target){

            memberTarget.setNickname(nickname);
    
            const nname = new Discord.MessageEmbed()
                
            .setColor('FB542B')
            .setTitle("Changed Nickname for "+ (message.mentions.members.first().displayName))
            .setDescription("New Nickname: "+ nickname)
            .setFooter("Happily moderating MrSuicideSheep server :D")
    
            message.channel.send({ embeds: [nname]});
        }}

            else{
                message.channel.send("Wasn't able to change the nickname :/");
            }
        }  


}
