module.exports = {
    name: 'playlist',
    description: "Sends Music Playlists to Members",
    execute(message, args) {
    text = "Here are the playlist links! \n Youtube: <https://youtube.com/playlist?list=PLDfKAXSi6kUZnATwAUfN6tg1dULU-7XcD> \n \n Spotify: <https://open.spotify.com/playlist/1R2vTiGLiVu7SOMTGASFQv?si=przMOXi9RHOpRfpSZzHXvw> \n \n SoundCloud: <https://soundcloud.com/mrsuicidesheep/sets>"
        
    message.author.send(text).then(() => {
    message.channel.send("You have been DMed the playlists :)")}).catch(() => {;

    message.channel.send("Your DMs are closed, Wasn't able to send you the playlists \n \n But Hey, here are the links! \n Youtube: <https://youtube.com/playlist?list=PLDfKAXSi6kUZnATwAUfN6tg1dULU-7XcD> \n \n Spotify: <https://open.spotify.com/playlist/1R2vTiGLiVu7SOMTGASFQv?si=przMOXi9RHOpRfpSZzHXvw> \n \n SoundCloud: <https://soundcloud.com/mrsuicidesheep/sets>");
    })





}
}
