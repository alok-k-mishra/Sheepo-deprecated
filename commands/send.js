
module.exports = {
    name: 'send',
    description: "Secret Sending from dms",
    execute(message, args, Discord) {
        
        const guild = message.client.guilds.cache.get('426851648309035008')
        
        const channel = guild.channels.cache.get("426851648309035011")

        var dmmessage = args.slice(1).join(" ")
       /// console.log(dmmessage)



       channel.send(dmmessage)



}
}
