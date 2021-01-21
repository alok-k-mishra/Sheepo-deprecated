module.exports = {
    name: 'tempmute',
    description: "Temporarily Mute Members",
    execute(message, args, Discord) {
        if (message.member.hasPermission("KICK_MEMBERS") || message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("MANAGE_SERVER") || message.member.hasPermission("BAN_MEMBERS")){
            var target = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
            

            message.delete();

        if (target) {
            
            var mutereason = args.join(" ").slice(22);
            if (!mutereason){
                mutereason = "No mute reasons provided";
            }

            
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Flock');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
            let mss = args[1]
            let mst = (mss * 60000);
            memberTarget.roles.set([muteRole.id]);



        const purge = new Discord.MessageEmbed()
            
        .setColor('3DAE3B')
        .setTitle("Muted " + (message.mentions.members.first().displayName) + " for " + (args[1]) + " minutes :clock:")
        .setFooter("Happily moderating MrSuicideSheep server :D")
        .setDescription("Reason: "+ mutereason)
        .setTimestamp()

        message.channel.send(purge);


        setTimeout(tunmute, mst) 
            
            function tunmute(){
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            }
        

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