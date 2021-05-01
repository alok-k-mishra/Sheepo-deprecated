module.exports = {
    name: 'filter',
    description: "msg filter",
    execute(message, args, Discord) {


        let bl = [
            "Bruh, why?", "smh.", "<:FeelsBanMan:756266709085847574>", "<:Welp:809237146950041620> nope.",
            "Chill", "nO.", "brutha-, keep it safe <:angeryfish:784084830769905675>", "<:angeryfish:784084830769905675>",
            "that's not allowed.", "<:MikeSullyFaceSwap:766014297959563284>", "<:MikeSullyFaceSwap:766014297959563284> no."
          ]
        
          let blrandom = Math.floor(Math.random() * 11);
          let blmsg = bl[blrandom];
        

        message.channel.send(blmsg)

    }

}