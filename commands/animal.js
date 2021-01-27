module.exports = {
    name: 'animal',
    async execute(message, args, Discord  ){
        
        const fetch = require('node-fetch')

        let keyword = "cute animals";


        let animall = `https://api.tenor.com/v1/search?q=${keyword}&key=${process.env.TENORKEY}&contentfilter=high`


        let response = await fetch(animall);

        let result = await response.json();

        const randomanimal = Math.floor(Math.random() * result.results.length);


        const animalll = result.results[randomanimal].url

        message.channel.send(animalll);


        
    
    


        
        


    }

};
