module.exports = {
    name: 'bday',
    description: "Wish a Member on their birthday",
    execute(message, args, Discord){
        
        const mentions = message.mentions.users.size;

        if(!mentions)
        {
            message.channel.send('Hey, who\'s birthday is it?');
        } else {


            let bdaym = [
                            "Happy birthday!! I hope your day is filled with lots of love and laughter! May all of your birthday wishes come true.",
                            "I want your birthday to be celebrated as a national holiday because then I’ll get a day off. Happy birthday.",
                            "On your special day, I wish you good luck. I hope this wonderful day will fill up your heart with joy and blessings.",
                            "So many candles for such a small cake? Happy birthday.",
                            "You have to get older, but you don’t have to grow up.",
                            "Thinking of you on your birthday, and wishing you all the best! I hope it is as fantastic as you are!",
                            "I love you like I love cake at a birthday party. Don’t forget to invite me. Happy birthday.",
                            "One birthday will not make you old. Even a dozen will not make you old. Maybe you should have stopped counting there though. Happy birthday, again.",
                            "Warmest wishes to you on your very special day. I hope that you continue to change the lives of others with your positivity, love, and beautiful spirit.",
                            "I wish I could turn back the clock. I’d find you sooner and love you longer. Happy birthday.",
                            "From the cries of joy to the cries of sorrow, may your special day bring you a better tomorrow. Happy birthday!",
                            "A party without cake is just a meeting.",
                            "At least you’re not as old as you will be next year.",
                            "I wanted to buy a candle holder, but the store didn’t have one. So I got a cake. :P",
                            "You know you’re getting old when the candles cost more than the cake. :p"
                        ];




            let bdaymr = Math.floor(Math.random() * 15);

            let rbdaym = bdaym[bdaymr]


        const bday = new Discord.MessageEmbed()

        .setColor('00FFEC')
        .setTitle("Yoooo " + (message.mentions.members.first().displayName) + " it\'s ur bday!!!! " )
        .setDescription(rbdaym)

        message.channel.send(bday);
        }
    }


    }
