const Discord = require('discord.js');

const client = new Discord.Client();

const GuildMemberManager = require("discord.js");


const giphyRandom = require("giphy-random");

const gdata = giphyRandom(process.env.GIPHY_TOKEN)      

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  console.log("Error")
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
client.once('ready', () =>{
  console.log('SheepyMod is Online!');
  client.user.setActivity('Sheepy Server', { type: 'WATCHING'}).catch();
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;


  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (message.channel.type !== 'dm') {

    
    
    if(command === 'purge'){
      if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
        client.commands.get('purge').execute(message, args, Discord);
      }
      else{
          message.reply("Hey you ain't a mod or admin >:(");
          }
        }
        
   else if(command === 'clear') {
    if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
      client.commands.get('clearc').execute(message, args, Discord);
    }
    else{
        message.reply("Hey you ain't a mod or admin >:(");
        }

  } else if(command === 'kick') {
    if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
      client.commands.get('kick').execute(message, args, Discord);
    }
    else{
        message.reply("Hey you ain't a mod or admin >:(");
        }
    }

   else if(command === 'ban') {
    if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
      client.commands.get('ban').execute(message, args, Discord);
    }
    else{
        message.reply("Hey you ain't a mod or admin >:(");
        }
    }

   else if(command === 'mute') {
    if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
      client.commands.get('mute').execute(message, args, Discord);
    }
    else{
        message.reply("Hey you ain't a mod or admin >:(");
        }
    

  } else if(command === 'tempmute') {
    if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
      client.commands.get('tempmute').execute(message, args, Discord);
    }
    else{
        message.reply("Hey you ain't a mod or admin >:(");
        }

  }else if(command === 'tmute') {
    if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
      client.commands.get('tempmute').execute(message, args, Discord);
    }
    else{
        message.reply("Hey you ain't a mod or admin >:(");
        }

  } else if(command === 'sm') {
    if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
      client.commands.get('slowmode').execute(message, args, Discord);
    }
    else{
        message.reply("Hey you ain't a mod or admin >:(");
        }
  
  } else if(command === 'slowmode') {
    if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
      client.commands.get('slowmode').execute(message, args, Discord);
    }
    else{
        message.reply("Hey you ain't a mod or admin >:(");
        }}  else if(command === 'unmute') {
          if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
            client.commands.get('unmute').execute(message, args, Discord);
          }
          else{
              message.reply("Hey you ain't a mod or admin >:(");
            }
          } 
           else if(command === 'nickname') {
            if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")){
              client.commands.get('nickname').execute(message, args, Discord);
            }
            else{
                message.reply("Hey you ain't a mod or admin >:(");
              }
            

          }
   else if(command === 'help') {
      client.commands.get('help').execute(message, args, Discord);

  } else if (command === 'helpmember'){
      client.commands.get('helpmember').execute(message, args, Discord);

  } else if (command === 'helpmod'){
      client.commands.get('helpmod').execute(message, args, Discord);
    
  } else if(command === 'youtube') {
    client.commands.get('youtube').execute(message, args, Discord);

  } else if(command === 'playlist') {
    client.commands.get('playlist').execute(message, args, Discord);

  } else if(command === 'playlists') {
    client.commands.get('playlist').execute(message, args, Discord);

  } else if(command === 'yt') {
    client.commands.get('youtube').execute(message, args, Discord);

  } else if(command === 'ping') {
    client.commands.get('ping').execute(message, args, Discord);

  }
  else if(command === 'bonk') {
  client.commands.get('bonk').execute(message, args, Discord);

  }
  else if(command === 'bday') {
  client.commands.get('bday').execute(message, args, Discord);

  }
  else if(command === 'hug') {
  client.commands.get('hug').execute(message, args, Discord);

  } 

  else if(command === 'doubt') {
  client.commands.get('doubt').execute(message, args, Discord);
  }
  else if(command === 'slap') {
  client.commands.get('slap').execute(message, args, Discord);
  }
  else if(command === 'pat') {
  client.commands.get('pat').execute(message, args, Discord);
  
} else if(command === 'feedback'){
  client.commands.get('feedback').execute(message, args, Discord);

} else if(command === 'doggo'){
  client.commands.get('doggo').execute(message, args, Discord);
}

}
  
else {

    message.author.send("Hey, you gotta use my commands in sheepy server :)");
}

})




client.login(process.env.DJS_TOKEN);