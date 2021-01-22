const commandFiles = ['ban', 'bday', 'bonk', 'clearc', 'doubt', 'help', 'helpmember', 'helpmod', 'hug', 'kick', 'mute', 'pat', 'ping', 'playlist', 'purge', 'slap', 'slowmode', 'tempmute', 'unmute', 'youtube']; 
const Discord = require('discord.js');
const client = new Discord.Client();
const GuildMemberManager = require("discord.js");
const prefix = process.env.PREFIX;
require("dotenv").config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN; 
client.commands = new Discord.Collection();

commandFiles.forEach(filename => {
  try {
  const command = require(`./commands/${filename}.js`);
    client.commands.set(command.name, command);
    console.log(`${filename} was loaded and set.`); 
} catch {
  console.log(`Oops something went wrong! ${filename} did not load!`);
  }
}); 

client.once('ready', () =>{
  console.log('SheepyMod is Online!');
  try {
    client.user.setActivity('Sheepy Server', { type: 'WATCHING'}) 
  } catch {
    console.log(`Error at client ready, check setActivity!`); 
    return;  
  }
});

client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) {
    return;
  } else {
    if (message.channel.type !== 'dm') {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        
        // Below follows a switch statement, to remove a lot of the clutter, and improve the efficiency of the code.  I've also group together certain commands that have aliases, added try / catch blocks too although 
        // I have to work on these being added.  I've also added a helper function and used that to test user permissions, abstracting away all redudant code.  
        switch(command) {
          case 'ban':  
          if (userHasPermissions(message.member)){
            try {
              client.commands.get('ban').execute(message, args, Discord); 
            } catch{
                addError(1, message.member); 
            }
          }
          break;       
        
          case 'bday': 
            client.commands.get('bday').execute(message, args, Discord);
          break;
        
          case 'bonk':
            client.commands.get('bonk').execute(message, args, Discord);
          break;
        
          case 'clear':
            if(userHasPermissions(message.member)) {
              try {
                client.commands.get('clearc').execute(message, args, Discord);
                console.log(`tidying up...`) 
              } catch {
                addError(1, message.member); 
              }
            }
          break;
          
          case 'doubt':
            client.commands.get('doubt').execute(message, args, Discord);
          break;
        
          case 'help':
            client.commands.get('help').execute(message, args, Discord);
          break;
        
          case 'helpmember':
            client.commands.get('helpmember').execute(message, args, Discord);
          break;
        
          case 'helpmod':
            client.commands.get('helpmod').execute(message, args, Discord);
          break;
        
          case 'hug':
            client.commands.get('hug').execute(message, args, Discord);
          break;
        
          case 'kick':
            if (userHasPermissions(message.member)){
              try {
                client.commands.get('kick').execute(message, args, Discord)
              } catch {
                addError(1, message.member); 
                }
            }
          break;
        
          case 'mute':
            if (userHasPermissions(message.member)){
              client.commands.get('mute').execute(message, args, Discord).catch(() => {;
        
                addError(1, message.member); 
                })
            }
          break;
        
          case 'pat':
            client.commands.get('pat').execute(message, args, Discord);
          break;
        
          case 'ping':
            client.commands.get('ping').execute(message, args, Discord);
          break;
        
          case 'playlist':
          case 'playlists': 
            client.commands.get('playlist').execute(message, args, Discord);
          break;
        
        
          case 'purge':
            if (userHasPermissions(message.member)){
              client.commands.get('purge').execute(message, args, Discord).catch(() => {;
        
                addError(1, message.member); 
                })
            }
          break;
        
          case 'slap':
            client.commands.get('slap').execute(message, args, Discord);
          break;
        
          case 'slowmode':
          case 'sm': 
            if (userHasPermissions(message.member)){
              client.commands.get('slowmode').execute(message, args, Discord).catch(() => {;
        
                addError(1, message.member); 
                })
            }
          break;
        
          case 'tempmute':
          case 'tmute': 
            if (userHasPermissions(message.member)){
              client.commands.get('tempmute').execute(message, args, Discord).catch(() => {;
        
                addError(1, message.member); 
                })
            }
          break;
        
          case 'unmute':
            client.commands.get('unmute').execute(message, args, Discord);
          break;
        
          case 'youtube':
          case `yt`:
            client.commands.get('youtube').execute(message, args, Discord);
          break; 
        
          default: 
          addError(2, message.member); 
         } 
        }
      }})

      function userHasPermissions(vMember) {
        const permsArray = ['KICK_MEMBERS', "MANAGE_MESSAGES", "MANAGE_SERVER", "BAN_MEMBERS"];
        let bHasPermission = false;   
        permsArray.forEach(permission => {
          if(vMember.hasPermission(permission)) { 
            bHasPermission = true; 
          }
        });
        return bHasPermission;   
      }
      
      function addError(vErrorCode, vMemberName) {
        let errMessage = "" ;
        switch(vErrorCode) {
          case 1: 
            errMessage = `Hey ${vMemberName} you ain't a mod or admin!  Why are you trying to use this?`;
          break; 
          case 2: 
            errMessage = `Yo!  You gotta use my commands in Sheepy Server, ${vMemberName}`; 
          break; 
          default: 
          errMessage = "Something went wrong!"; 

        };
        message.reply(errMessage); 
        return;
      }


client.login(process.env.DISCORD_TOKEN);  