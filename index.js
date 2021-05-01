const Discord = require('discord.js');

const client = new Discord.Client();

const GuildMemberManager = require("discord.js");

const badwords = require("./bw.json")

const badwords2 = require("./bw.json")

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  console.log("Error")
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
client.once('ready', () =>{
  console.log('SheepyMod is Online!');
  client.user.setActivity('Sheepy Server', { type: 'WATCHING'}).catch();
});

client.on('message', message =>{

  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();



  let bl = [
    "Bruh, why?", "smh.", "<:FeelsBanMan:756266709085847574>", "<:Welp:809237146950041620> nope.",
    "Chill", "nO.", "brutha-, keep it safe <:angeryfish:784084830769905675>", "<:angeryfish:784084830769905675>",
    "that's not allowed.", "<:MikeSullyFaceSwap:766014297959563284>", "<:MikeSullyFaceSwap:766014297959563284> no."
  ]

  let blrandom = Math.floor(Math.random() * 11);
  let blmsg = bl[blrandom];



  (command === 'send')?
  (message.author.id = '560848102295207940') ?
  client.commands.get('send').execute(message, args, Discord) : message.author.send("Hey, you gotta use my commands in sheepy server :)") 

: (message.channel.type !== 'dm') ?
    
    (command === 'purge') ?
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832") || (message.author.id = '560848102295207940')) ?
      client.commands.get('purge').execute(message, args, Discord) : message.reply("Hey you ain't a mod or admin >:(") 

    : (command === 'clear') ?
     (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")  ) ? 
      client.commands.get('clearc').execute(message, args, Discord): message.reply("Hey you ain't a mod or admin >:(")
      
    : (command === 'kick') ?
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) ? 
      client.commands.get('kick').execute(message, args, Discord) : message.reply("Hey you ain't a mod or admin >:(")

    : (command === 'ban') ?
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) ?
      client.commands.get('ban').execute(message, args, Discord) : message.reply("Hey you ain't a mod or admin >:(")

    : (command === 'mute') ?
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) ?
      client.commands.get('mute').execute(message, args, Discord) : message.reply("Hey you ain't a mod or admin >:(")

    : (command === 'tempmute') ?
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) ?
      client.commands.get('tempmute').execute(message, args, Discord) : message.reply("Hey you ain't a mod or admin >:(")

    : (command === 'tmute') ?
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) ?
      client.commands.get('tempmute').execute(message, args, Discord) : message.reply("Hey you ain't a mod or admin >:(")

    : (command === 'sm') ?
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) ?
      client.commands.get('slowmode').execute(message, args, Discord) : message.reply("Hey you ain't a mod or admin >:(")

    : (command === 'slowmode') ?
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) ?
      client.commands.get('slowmode').execute(message, args, Discord) : message.reply("Hey you ain't a mod or admin >:(")

    : (command === 'unmute') ?
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) ?
      client.commands.get('unmute').execute(message, args, Discord) :message.reply("Hey you ain't a mod or admin >:(")

    : (command === 'nickname') ? 
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) ?
      client.commands.get('nickname').execute(message, args, Discord) : message.reply("Hey you ain't a mod or admin >:(")

    : (command === 'help') ? client.commands.get('help').execute(message, args, Discord)

    : (command === 'helpmember') ? client.commands.get('helpmember').execute(message, args, Discord)

    : (command === 'helpmod') ? client.commands.get('helpmod').execute(message, args, Discord)
      
    : (command === 'youtube' || command === 'yt') ? client.commands.get('youtube').execute(message, args, Discord)

    : (command === 'playlist' || command === 'playlists') ? client.commands.get('playlist').execute(message, args, Discord)

    : (command === 'ping') ? client.commands.get('ping').execute(message, args, Discord)

    : (command === 'bonk') ? client.commands.get('bonk').execute(message, args, Discord)
    
    : (command === 'bday') ? client.commands.get('bday').execute(message, args, Discord)

    : (command === 'hug') ? client.commands.get('hug').execute(message, args, Discord)

    : (command === 'doubt') ? client.commands.get('doubt').execute(message, args, Discord)

    : (command === 'slap') ? client.commands.get('slap').execute(message, args, Discord)

    : (command === 'pat') ? client.commands.get('pat').execute(message, args, Discord)

    : (command === 'boop') ? client.commands.get('boop').execute(message, args, Discord)

    : (command === 'poke') ? client.commands.get('poke').execute(message, args, Discord)

    : (command === 'catto') ? client.commands.get('catto').execute(message, args, Discord)

    : (command === 'doggo') ? client.commands.get('doggo').execute(message, args, Discord)

    : (command === 'animal') ? client.commands.get('animal').execute(message, args, Discord)

    : (command === 'birb') ? client.commands.get('birb').execute(message, args, Discord)

    : (command === 'rosie') ? client.commands.get('rosie').execute(message, args, Discord)

   
    : {}
   
   
    : badwords.some(word => message.content.includes(word)) ?
      message.channel.send(blmsg)

    : badwords2.some(word => message.content.includes(word)) ? 
      message.delete()
      .then(message.channel.send(blmsg))
        
  : message.author.send("Hey, you gotta use my commands in sheepy server :)");



















    



 
})


client.login(process.env.DJS_TOKEN);