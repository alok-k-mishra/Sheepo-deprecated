const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'youtube',
    description: "Sends Youtube Link",
    execute(message, args, Discord) {
    text = "Here are the playlist links! \n Youtube: <https://youtube.com/playlist?list=PLDfKAXSi6kUZnATwAUfN6tg1dULU-7XcD> \n \n Spotify: <https://open.spotify.com/playlist/1R2vTiGLiVu7SOMTGASFQv?si=przMOXi9RHOpRfpSZzHXvw> \n \n SoundCloud: <https://soundcloud.com/mrsuicidesheep/sets>"
    const youtube = new Discord.MessageEmbed()

    .setTitle("Here's the Youtube Link! :D")
    .setURL("https://www.youtube.com/user/MrSuicideSheep")
    .setAuthor("MrSuicideSheep", "https://lh3.googleusercontent.com/BXlHhxyGmyTr7w4F8tSMui6qMSYz9H-Sa-j68037r7RQyCJdX73khLuCr0fpE6qnWtMPOWlQTweItOttmjCPnGtW")
    .setColor('99ffeb')
    .setFooter("Happily moderating MrSuicideSheep server :D")
    .setThumbnail("https://yt3.ggpht.com/ytc/AAUvwni9ZWFXKGIHTNLSrRuXjckOTQ_lgbHRPx9ylBU3PA=s900-c-k-c0x00ffffff-no-rj")
    .setTimestamp()

    
        message.channel.send({embeds: [youtube]});



}
}