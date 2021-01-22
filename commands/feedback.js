module.exports = {
    name: 'feedback',
    description: "Collect Feedback",
    execute(message, args) {
    ftext = "Here is the feedback link! \n <https://forms.gle/4c1jNEkiFoyMgUTm7> "
        
    message.author.send(ftext).then(() => {
    message.channel.send("You have been DMed the link :)")}).catch(() => {;

    message.channel.send("Your DMs are closed, Wasn't able to send you the form \n \n But Hey, here is the link! \n <https://forms.gle/4c1jNEkiFoyMgUTm7>");
    })





}
}
