module.exports = {
    name: 'kick',
    description: "Kick Members",
    execute(message, args, Discord) {
        
        if (message.member.hasPermission("KICK_MEMBERS") || message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("MANAGE_SERVER") || message.member.hasPermission("BAN_MEMBERS")){
            const target = message.mentions.users.first();

            message.delete();

            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
        
            
        var kickreason = args.join(" ").slice(22);
        if (!kickreason){
            kickreason = "No kick reasons provided";
        }

        if(target){

            memberTarget.kick(kickreason);

            const kick = new Discord.MessageEmbed()
            .setColor('FB542B')
            .setTitle("Successfully Kicked "+ (message.mentions.members.first().displayName) + " :athletic_shoe:")
            .setDescription(`Reason: ${kickreason}`)
            .setFooter("Happily moderating MrSuicideSheep server :D")
            .setTimestamp()

            return message.channel.send(kick);

        
        }
    
        } else{
            message.channel.send("Wasn't able to find or kick the member");
        }
    }

        else {
            message.reply("Hey you ain't a mod or admin >:(");     
        }
    
    }
    }

    