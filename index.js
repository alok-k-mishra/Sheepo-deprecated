const { Client , GatewayIntentBits , Partials , Collection, EmbedBuilder, ButtonInteraction, Embed } = require("discord.js");

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;

const { User, Message, GuildMember, ThreadMember} = Partials;

const { DisTube } = require('distube');

const { YtDlpPlugin } = require("@distube/yt-dlp");

const { SoundCloudPlugin } = require('@distube/soundcloud');

const { SpotifyPlugin } = require('@distube/spotify');

const client = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildVoiceStates', 'GuildMessages'],
  partials: [User, Message, GuildMember, ThreadMember]
});

const { loadEvents } = require("./Handlers/eventHandler");
// const { connect } = require("mongoose");

client.events = new Collection();
client.commands = new Collection();

loadEvents(client);


const { ActivityType } = require('discord.js');

// const GuildMemberManager = require("discord.js");


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

  // connect(process.env.MONGODB_URL, {
  // }).then(() => console.log("The client is now connected to MongoDB Database"));



  client
    .login(process.env.DJS_TOKEN)
    .then(() => {
    client.user.setActivity('Sheepy Server || Backoff AutoMod!!!',
    { type: ActivityType.Watching }
    );
    client.user.setStatus('idle');
    }
    
    )

    client.on('messageCreate', (message) => {

      const args = message.content.slice().trim().split(' ');
      if(message.author.bot || !message.channel === '762736320240943145') return;
  
      distube.play(message.member.voice.channel, args.join(' '), {
        member: message.member,
        textChannel: message.channel,
        message
    }).then(setTimeout(() => message.delete(), 2000)).catch(err => 
      message.reply('Join a VC lol.')).then(setTimeout(() => message.delete(), 2000))
    }
    
      )


    client.on('interactionCreate', (interaction) => {
      const NoMusic = new EmbedBuilder()
      .setTitle("No Music Playing.")
      .setColor("5DFF00")
      .setDescription("MrSuicideSheep")


      if(interaction.customId === 'Stop'){
        distube.stop(interaction)
         
        interaction.update({
          embeds : [NoMusic]
        })


      }

      if(interaction.customId === 'Skip'){
        distube.skip(interaction)
         
        interaction.update({
          embeds : [PlayingMusic]
        })


      }

      if(interaction.customId === 'Queue'){
        const queue = distube.getQueue(message)
        const queueL = new EmbedBuilder
        if (!queue) {
          interaction.reply({
          content: 'Nothing playing right now!',
          ephemeral: true
        })
        } else {
          message.channel.send(
            `Current queue:\n${queue.songs
              .map(
                (song, id) =>
                  `**${id ? id : 'Playing'}**. ${song.name} - \`${
                    song.formattedDuration
                  }\``,
              )
              .slice(0, 10)
              .join('\n')}`,
          )
        }
    }
      
     
      if (
       [
         '3d',
         'bassboost',
         'echo',
         'karaoke',
         'nightcore',
         'vaporwave',
       ].includes(command)
     ) {
       const filter = distube.setFilter(message, command);
       message.channel.send(
         `Current queue filter: ${filter.join(', ') || 'Off'}`,
       );
     }
        distube.skip(interaction)
         
        interaction.reply({
          embeds : [PlayingMusic]
        })


      }


    )
  

    // DisTube event listeners, more in the documentation page
distube

.on('playSong', (queue, song) => {

  const PlayingMusic = new EmbedBuilder()
  .setColor('#3EFF00')
  .setTitle('<:screaming_cat:766014264908840970> Playing' +  `\n \n${song.name}`)
  .addField('Requested By', `${song.user}`)
  .setTimestamp()
  .setFooter(`${status(queue)}`);
  

  queue.textChannel.edit({ embeds: [PlayingMusic] }
  )})

.on('addSong', (queue, song) => {

const AddingMusic = new EmbedBuilder()
.setColor('#00FFD8')
.setTitle('✅ Adding'+  `\n${song.name}` + ' to the queue')
.addField('Requested By', `${song.user}`)
.setTimestamp()
.setFooter(`${status(queue)}`);

queue.textChannel.edit({embeds: [AddingMusic]} )
})

.on('addList', (queue, playlist) =>{

const AddingList = new EmbedBuilder()
    .setColor('#00FFD8')
    .setTitle('✅ Adding ' +  '${playlist.name}' + ' playlist' + '\n $playlist.songs.length'+ ' songs' + ' to the queue')
    .setTimestamp()
    .setFooter(`${status(queue)}`);
  queue.textChannel.send({embeds: [AddingList]},
  )
})

.on('error', (textChannel, e) => {
  console.error(e);
  textChannel.send(
    `An error encountered`,
  );

})
.on('finish', queue => queue.textChannel?.send('Finished queue!').then(msg => {
    setTimeout(() => msg.delete(), 3000)
  })
  .catch(console.error)
  )


.on('finishSong', queue =>
  queue.textChannel?.send('Finished song!').then(msg => {
    setTimeout(() => msg.delete(), 3000)
  })
  .catch(console.error)
)
.on('disconnect', queue =>
  queue.textChannel?.send('Disconnected!🥲').then(msg => {
    setTimeout(() => msg.delete(), 3000)
  })
  .catch(console.error)

)

.on('empty', queue =>
  queue.textChannel?.send(
    'The voice channel is empty! Leaving the voice channel 👋🏼').then(msg => {
      setTimeout(() => msg.delete(), 3000)
    })
    .catch(console.error)
)


// DisTubeOptions.searchSongs = true
.on('searchResult', (message, result) => {
  let i = 0;

  const SearchList = new EmbedBuilder()
    .setColor('#00FFD8')
    .setTitle('🔎**Choose an option from below**🔍\n')
    .addField(
    `${result.map(
      song =>
        `**${++i}**. ${song.name} - \`
        ${song.formattedDuration}\``,
    )
    .join(
      '\n',
    )}`)
  .setFooter(`\n*Enter anything else or wait 30 seconds to cancel*`);

      queue.textChannel.send({embeds: [SearchList]},
      ).then(msg => {
        setTimeout(() => msg.delete(), 30000)
      })
      .catch(console.error);
})

.on('searchCancel', message =>
  message.channel.send('Searching canceled').then(msg => {
    setTimeout(() => msg.delete(), 3000)
  })
  .catch(console.error),
)

.on('searchInvalidAnswer', message =>
  message.channel.send('Invalid number of results.').then(msg => {
    setTimeout(() => msg.delete(), 3000)
  })
  .catch(console.error),
)

.on('searchNoResult', message =>
  message.channel.send('No result found!').then(msg => {
    setTimeout(() => msg.delete(), 3000)
  })
  .catch(console.error),
)

.on('searchDone', () => {});