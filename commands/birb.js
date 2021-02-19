module.exports = {
    name: 'birb',
    async execute(message, args, Discord  ){
        

        message.react('🐦');

        const fetch = require('node-fetch')

        let keyword = "birb";


        let birbgif = `https://api.tenor.com/v1/search?q=${keyword}&key=${process.env.TENORKEY}&contentfilter=high`


        let response = await fetch(birbgif);

        let result = await response.json();

        const randombirb = Math.floor(Math.random() * result.results.length);

        const birbbb = result.results[randombirb].url


        message.channel.send(birbbb);


        
    
    


        
        


    }

};
