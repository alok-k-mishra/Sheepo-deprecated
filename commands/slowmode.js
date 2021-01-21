module.exports = {
    name: 'slowmode',
    description: "Channel Slowmode",
    execute(message, args, Discord) {
    
        const smdur = args[0];

        message.delete();

    if (smdur<0 || smdur>360){

        message.channel.send("Bruh, send a real number between 1 to 360! :/")

    } else{


        if (!smdur){
        
            message.channel.setRateLimitPerUser(0);
            const disabledslomo = new Discord.MessageEmbed()
            
                .setColor('FF00E8')
                .setTitle("Disabled Message Cooldown")
                .setFooter("Happily moderating MrSuicideSheep server :D")
                .setTimestamp()

            message.channel.send(disabledslomo);
                }

            else if(args[0] === 0) {


                const disabledslomo = new Discord.MessageEmbed()
            
                .setColor('FF00E8')
                .setTitle("Disabled Message Cooldown")
                .setFooter("Happily moderating MrSuicideSheep server :D")
                .setTimestamp()

            message.channel.send(disabledslomo);
                }

                else{

                message.channel.setRateLimitPerUser(smdur);

            const slowmode = new Discord.MessageEmbed()
            
                .setColor('FFFF00')
                .setTitle("Made message cooldown for "+ smdur + " seconds")
                .setFooter("Happily moderating MrSuicideSheep server :D")
                .setTimestamp()


             message.channel.send(slowmode);
             }
            }
            
    }     

}
