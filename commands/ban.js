module.exports = {
    name: 'ban',
    description: "Ban Member",
    execute(message, args, Discord) {

        message.delete();
        
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
        
            
        var banreason = args.join(" ").slice(22);
        if (!banreason){
            banreason = "No ban reasons provided";
        }

        if(target){

            memberTarget.ban(banreason);
    
            const ban = new Discord.MessageEmbed()
                
            .setColor('FB542B')
            .setTitle("Successfully Banned "+ (message.mentions.members.first().displayName) + " :BanHammer:")
            .setDescription("Reason: "+ banreason)
            .setFooter("Happily moderating MrSuicideSheep server :D")
    
            message.channel.send(ban);
        }
            else{
                message.channel.send("Wasn't able to ban the member :/");
            }
        }  


}
}