
module.exports = {
    name: 'send',
    description: "Secret Sending from dms",
    execute(message, args, Discord) {
        
        const guild = message.client.guilds.cache.get('426851648309035008')
        

        var dmmessage = args.slice(1).join(" ")
       /// console.log(dmmessage)

       const channel1 = guild.channels.cache.get("426851648309035011")
       const channel2 = guild.channels.cache.get("682270340939776067") 
       const channel3 = guild.channels.cache.get("765564135798079518")
       const channel4 = guild.channels.cache.get("455037507734863882")
       const channel5 = guild.channels.cache.get("464279991463706627")

       if(args[1] === 'gen'){
        channel1.send(dmmessage);
    }
       if(args[1] === 'pvm'){
        channel2.send(dmmessage);
       }
       if(args[1] === 'selfies'){
        channel3.send(dmmessage);
        }
       if(args[1] === 'ap'){
        channel4.send(dmmessage);
       }
       if(args[1] === 'intro'){
        channel5.send(dmmessage);
       }


}
}
