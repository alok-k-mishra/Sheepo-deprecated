module.exports = {
    name: 'beta',
    description: "Kick Members",
    execute(message, args, Discord) {
        
        if (message.member.roles.cache.has('799264088534024192') || message.member.roles.cache.has('799264116203847712')){
            var kickreason = args.join(" ").slice(22);
            if (!kickreason){
                kickreason = "No kick reasons provided";
            }

        let userID = args.includes('<@!') ? args.replace('<@!', '').replace('>', '')
        : args.includes('<@') ? args.replace('<@', '').replace('<', '') : '';

        if (userID == '') {
        message.reply('Invalid user ID or mention.');
        return;
        }

    message.guild.fetchMember(userID).then(member => {
    member.kick("Kicked, Reason: " + kickreason).then(m => {

        const kick = new Discord.MessageEmbed()
            
        .setColor('FB542B')
        .setTitle("Successfully Kicked "+ (message.mentions.members.first()) + " :athletic_shoe:")
        .setDescription("Reason: "+ kickreason)
        .setFooter("Happily moderating MrSuicideSheep server :D")

        message.channel.send(kick);

        }).catch(() => {
        console.error;
        message.reply('Could not kick the specified member. :/');
        }
        )
     }
    )}

        
       else {
        message.reply("Hey you ain't a mod or admin >:(");
        
    
    
       }
    
    }
}
