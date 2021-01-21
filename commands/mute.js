module.exports = {
    name: 'mute',
    description: "Mute Members",
    execute(message, args, Discord) {
        if (message.member.hasPermission("KICK_MEMBERS") || message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("MANAGE_SERVER") || message.member.hasPermission("BAN_MEMBERS")){
            var reason = args[1];
            var target = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
            message.delete();

            
            if(target){

                let mainRole = message.guild.roles.cache.find(role => role.name === 'Flock');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
     
                let memberTarget = message.guild.members.cache.get(target.id);
                let mentioned = message.mentions.users.first();
                memberTarget.roles.set([muteRole.id]);



            const mute = new Discord.MessageEmbed()
            
                .setColor('3DAE3B')
                .setTitle("Muted " + (message.mentions.members.first()) + " :clock:")
                .setFooter("Happily moderating MrSuicideSheep server :D")
                .setDescription("Reason: "+ reason)
                .setTimestamp()

            const muteDM = new Discord.MessageEmbed()
            .setColor('3DAE3B')
            .setTitle("You have been muted.")
            .setFooter("Happily moderating MrSuicideSheep server :D")
            .setDescription("Reason: "+ reason)
            .setTimestamp()

            message.channel.send(mute);
            mentioned.send(muteDM);
            }
        
            else{

            message.reply("Mention the user to be muted :/");

                }
        
    
        }      

 
     else {

        message.reply("Hey you ain't a mod or admin >:(");
    

        }

    }
}