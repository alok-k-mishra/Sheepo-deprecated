module.exports = {
name: 'ping',
description: "Bot Ping in MS",
execute(message, args, Discord) {

    const ping = new Discord.MessageEmbed()

    .setTitle("🏓 Pong!")
    .setColor("5DFF00")
    .setDescription("📡 Latency is " + (Date.now() - message.createdTimestamp) + " ms")


    message.channel.send(ping);
    }
}