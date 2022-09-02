const { Client , GatewayIntentBits , Partials , Collection } = require("discord.js");

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;

const { User, Message, GuildMember, ThreadMember} = Partials;

// const {
//   ActionRowBuilder,
//   InteractionType,
//   ModelBuilder,
//   Routes,
//   SelectMenuBuilder,
//   TextInputBuilder,
//   TextInputStyle
// } = require('discord.js');

const { DisTube } = require('distube');

const { YtDlpPlugin } = require("@distube/yt-dlp");

const { SoundCloudPlugin } = require('@distube/soundcloud');

const { SpotifyPlugin } = require('@distube/spotify');

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildVoiceStates', 'GuildMessages'],
  partials: [User, Message, GuildMember, ThreadMember]
});

const { loadEvents } = require("./Handlers/eventHandler");

client.events = new Collection();
client.commands = new Collection();

loadEvents(client);


const { ActivityType } = require('discord.js');

// const GuildMemberManager = require("discord.js");

// const prefix = '.';

// const fs = require('fs');

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







distube.on('error', (channel, error) => {
    console.error(error)
    // channel.send(`An error encountered: ${error.slice(0, 1979)}`)

  })

  client
    .login(process.env.DJS_TOKEN)
    .then(() => {
    client.user.setActivity('Sheepy Server || Backoff AutoMod!!!',
    { type: ActivityType.Watching }
    );
    client.user.setStatus('idle');
    }
    
    )

  