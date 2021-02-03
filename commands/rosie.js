module.exports = {
    name: 'rosie',
    description: "rosie",
    execute(message, args, Discord) {
        

        message.react(message.react(message.guild.emojis.cache.get('783790184868741191')));

        message.channel.send(message.react(message.guild.emojis.cache.get('783790184868741191')));



    }

}