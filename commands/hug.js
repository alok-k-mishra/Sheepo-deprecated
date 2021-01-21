module.exports = {
    name: 'hug',
    description: "Hug Command",
    execute(message, args, Discord){
      
        const mentions = message.mentions.users.size;
        
        let hug = ["Huggiesss!!!!", "Yayyy Hugssss", "Tight hugssss", "hug hug hug", "Hugs everywhere!!!!"];
        let hugrandom = Math.floor(Math.random() * 5);
        
        let huggif = ["https://media.giphy.com/media/3oEdv4hwWTzBhWvaU0/giphy.gif", "https://media.giphy.com/media/f6y4qvdxwEDx6/giphy.gif", "https://media.giphy.com/media/U4LhzzpfTP7NZ4UlmH/giphy.gif", "https://media.giphy.com/media/VduFvPwm3gfGO8duNN/giphy.gif", "https://media.giphy.com/media/JzsG0EmHY9eKc/giphy.gif", "https://media.giphy.com/media/KL7xA3fLx7bna/giphy.gif"];
        let randomhug = Math.floor(Math.random() * 6);

        let hugr = hug[hugrandom];
        let huggr = huggif[randomhug];



        if(!mentions) {
            const hugEm = new Discord.MessageEmbed()
            
            .setColor('00FFEC')
            .setTitle("Here's a hug for you "+(message.author.username)+" :D :hugging: ")
            .setDescription(hugr)
            .setImage(huggr)
            
            message.channel.send(hugEm);    
            
            message.react('❤️');
            message.react('😄');
        }   

        else {
        const hugEm2 = new Discord.MessageEmbed() 
        .setColor('00FFEC')
        .setTitle(":hugging: "+(message.author.username)+" hugs "+(message.mentions.members.first().displayName))
        .setDescription(hugr)
        .setImage(huggr)
        

        message.channel.send(hugEm2);
        }



    }
}