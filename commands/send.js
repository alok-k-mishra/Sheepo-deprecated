module.exports = {
    name: 'send',
    description: "Secret Sending from dms",
    execute(message, args, Discord) {
        
        client.guilds.cache.get('426851648309035008')
        guild.channels.cache.get("426851648309035011")
        .catch(console.error);
        var message = args.join(" ").slice(22)


        message.channel.send(message);


}
}
