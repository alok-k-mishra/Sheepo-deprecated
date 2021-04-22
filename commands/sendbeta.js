
module.exports = {
    name: 'send',
    description: "Secret Sending from dms",
    execute(message, args, Discord) {
        
        const guild = message.client.guilds.cache.get('426851648309035008')
        

        var dmmessage = args.slice(1).join(" ")
       /// console.log(dmmessage)

       if(args[1] === 'gen'){
       const channel1 = guild.channels.cache.get("426851648309035011")
       channel1.send(dmmessage);
    }
       if(args[1] === 'pvm'){
       const channel2 = guild.channels.cache.get("682270340939776067") 
       channel2.send(dmmessage);
       }
       if(args[1] === 'selfies'){
       const channel3 = guild.channels.cache.get("765564135798079518")
       channel3.send(dmmessage);
        }
       if(args[1] === 'ap'){
       const channel4 = guild.channels.cache.get("455037507734863882")
       channel4.send(dmmessage);
       }
       if(args[1] === 'intro'){
       const channel5 = guild.channels.cache.get("464279991463706627")
       channel5.send(dmmessage);
       }

}
}
