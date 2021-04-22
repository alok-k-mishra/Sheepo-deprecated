
module.exports = {
    name: 'send',
    description: "Secret Sending from dms",
    execute(message, args, Discord) {
        
        const guild = message.client.guilds.cache.get('426851648309035008')
        const channel = guild.channels.cache.get("426851648309035011")        

        var message = args.join(" ").slice(22)


        message.channel.send(message);


}
}
