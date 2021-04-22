
module.exports = {
    name: 'send',
    description: "Secret Sending from dms",
    execute(message, args, Discord) {
        
        const guild = message.client.guilds.cache.get('426851648309035008')
        
        if(args[1] === 'gen')
        const channel = guild.channels.cache.get("426851648309035011")
        if(args[1] === 'pvm')
        const channel = guild.channels.cache.get("682270340939776067") 
        if(args[1] === 'selfies')
        const channel = guild.channels.cache.get("765564135798079518") 
        if(args[1] === 'ap')
        const channel = guild.channels.cache.get("455037507734863882") 
        if(args[1] === 'intro')
        const channel = guild.channels.cache.get("464279991463706627") 

        var dmmessage = args.join(" ").slice(22)


        message.channel.send(dmmessage);


}
}
