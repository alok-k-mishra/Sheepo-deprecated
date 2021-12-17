const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = getVoiceConnection(myVoiceChannel.guild.id);
        voiceChannel.destroy();
        await message.channel.send('Leaving channel :smiling_face_with_tear:')
 
    }
}