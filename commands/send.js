module.exports = {
    name: 'send',
    description: "Secret Sending from dms",
    execute(message, args, Discord) {
        
        message.client.guild.fetch('426851648309035008')
        message.member.guild.channel.fetch("426851648309035011")
        .catch(console.error);
        var message = args.join(" ").slice(22)


        message.channel.send(message);


}
}
