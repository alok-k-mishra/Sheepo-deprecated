module.exports = {
    name: 'send',
    description: "Secret Sending from dms",
    execute(message, args, Discord) {
        
            
        var message = args.join(" ").slice(22)
        client.guild.cache.get("426851648309035008")
        client.channels.get("426851648309035011").send(message);
    }
}

