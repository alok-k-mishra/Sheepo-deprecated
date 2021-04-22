
module.exports = {
    name: 'send',
    description: "Secret Sending from dms",
    execute(message, args, Discord) {
        
        const guild = message.client.guilds.cache.get('426851648309035008')
        

        var dmmessage = args.slice(1).join(" ")
       /// console.log(dmmessage)

       if(args[1] === 'gen'){
       var channel = guild.channels.cache.get("426851648309035011")
       message.channel.send(dmmessage)
    }
       if(args[1] === 'pvm'){
       var channel = guild.channels.cache.get("682270340939776067") 
       message.channel.send(dmmessage)
       }
       if(args[1] === 'selfies'){
       var channel = guild.channels.cache.get("765564135798079518")
       message.channel.send(dmmessage) 
        }
       if(args[1] === 'ap'){
       var channel = guild.channels.cache.get("455037507734863882") 
       message.channel.send(dmmessage)
       }
       if(args[1] === 'intro'){
       var channel = guild.channels.cache.get("464279991463706627")
       message.channel.send(dmmessage) 
       }

}
}
