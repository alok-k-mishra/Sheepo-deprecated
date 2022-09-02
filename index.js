const { Client } = require("discord.js");

const { DisTube } = require('distube');

const { YtDlpPlugin } = require("@distube/yt-dlp");

const { SoundCloudPlugin } = require('@distube/soundcloud');

const { SpotifyPlugin } = require('@distube/spotify');

const client = new Discord.Client({ intents: ['Guilds', 'GuildVoiceStates', 'GuildMessages']});

const GuildMemberManager = require("discord.js");

const prefix = '.';

const fs = require('fs');

const { MessageEmbed } = require('discord.js');

// Create a new DisTube
const distube = new DisTube(client, {
	searchSongs: 7,
	searchCooldown: 30,
	leaveOnEmpty: false,
	leaveOnFinish: false,
	leaveOnStop: false,
	plugins: [new SoundCloudPlugin(),
            new SpotifyPlugin()]
})


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./commands/`).filter(files => files.endsWith('.js'));;

for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  console.log("Loading", command.name)

  client.commands.set(command.name, command);
}





distube.on('error', (channel, error) => {
    console.error(error)
    // channel.send(`An error encountered: ${error.slice(0, 1979)}`)

  })

  client
    .login(process.env.DJS_TOKEN)
    .then(() => {

    console.log('Sheepo is Online!');
    client.user.setActivity('Sheepy Server || Backoff AutoMod!!!',
    { type: 'WATCHING'});
        
    }
    
    )

  