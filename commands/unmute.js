const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'unmute',
    description: "Unmute Members",
    execute(message, args, Discord) {
        if (message.member.hasPermission("KICK_MEMBERS") || message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("MANAGE_SERVER") || message.member.hasPermission("BAN_MEMBERS")){
            var target = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
            message.delete();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Flock');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
     
                let memberTarget= message.guild.members.cache.get(target.id);
     
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);

                const unmute = new Discord.MessageEmbed()

                .setColor('2FFF3E')
                .setTitle("Unmuted "+ (message.mentions.members.first()) + " :green_circle:")
                .setFooter("Happily moderating MrSuicideSheep server :D")
                .setTimestamp()

                message.channel.send({embeds: [unmute]})
                
            } else{
                message.channel.send('Cant find that member :/');
            }


        }   else {
            message.reply("Hey you ain't a mod or admin >:(");
            
        }
    }

}