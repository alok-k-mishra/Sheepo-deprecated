module.exports = {
    name: 'tempmute',
    description: "Temporarily Mute Members",
    execute(message, args, Discord) {
        if (message.member.hasPermission("KICK_MEMBERS") || message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("MANAGE_SERVER") || message.member.hasPermission("BAN_MEMBERS")){
            var target = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
            

            message.delete();

        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Flock');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);

        setTimeout(function () {
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
        }, ms(args[1]));

        const purge = new Discord.MessageEmbed()
            
        .setColor('3DAE3B')
        .setTitle("Muted" + (message.mentions.members.first().displayName) + "for " + (args[1]) + " minutes :clock:")
        .setFooter("Happily moderating MrSuicideSheep server :D")
        .setDescription("Reason: "+ reason)
        .setTimestamp()

        message.channel.send(purge);

    }   
    else {
        message.reply("Mention the user to be muted :/")
    }
}


    
    else
    {
        message.reply("Hey you ain't a mod or admin >:(");

    }
    }
}