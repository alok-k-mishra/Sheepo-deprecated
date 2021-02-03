module.exports = {
    name: 'rosie',
    description: "rosie",
    execute(message, args, Discord) {
        

        message.react(":rosie:");
        message.channel.send(":rosie:");



    }

}