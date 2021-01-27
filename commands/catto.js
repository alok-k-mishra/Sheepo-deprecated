    module.exports = {
        name: 'catto',
        async execute(message, args, Discord  ){
            
            const fetch = require('node-fetch')

            let keyword = "cat";


            let cattogif = `https://api.tenor.com/v1/search?q=${keyword}&key=${process.env.TENORKEY}&contentfilter=high`


            let response = await fetch(cattogif);

            let result = await response.json();

            const randomcatto = Math.floor(Math.random() * result.results.length);

            const cattooo = new Discord.MessageEmbed() 

            .setColor('00FFEC')
            .setTitle("Catto")
            .setDescription("Ket")
            .setImage(randomcatto)


            message.channel.send(cattooo);


            
        
        


            
            


        }

    };
