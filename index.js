// const Discord = require('discord.js');

// const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES']});

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


const { YtDlpPlugin } = require("@distube/yt-dlp")

const DisTube = new DisTube.Distube(client, otp);

// const distube = new DisTube({ plugins: [new YtDlpPlugin({ update: false })] })



const { SoundCloudPlugin } = require('@distube/soundcloud')

const { SpotifyPlugin } = require('@distube/spotify')

const GuildMemberManager = require("discord.js");

const prefix = '.';

const fs = require('fs');

const { MessageEmbed } = require('discord.js');

// Create a new DisTube
const distube = new DisTube.default(client, {
	searchSongs: 5,
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




client.on('ready', () =>{
  console.log('Sheepo is Online!');
  client.user.setActivity('Sheepy Server || Backoff Automod!!!',
  { type: 'WATCHING'});

    distube.on('error', (channel, error) => {
      console.error(error)
      // channel.send(`An error encountered: ${error.slice(0, 1979)}`)

    })




  })


client.on('messageCreate' , (message) =>{

  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();



  if (command === 'msend') { if (message.author.id = '560848102295207940') {
    client.commands.get('send').execute(message, args, Discord) 
  }}  


  if(message.channel.type !== 'DM') {


           ///music

           if (command === 'play' || command === 'p') { 
            if(!args[0]) {message.reply("I don\'t know how to play empty search lol")}
            else {distube.play(message.member.voice.channel, args.join(' '), {
              member: message.member,
              textChannel: message.channel,
              message
          }).catch(err => 
            message.reply('Join a VC lol.'))
           }
    
            
          }
    
           if (['repeat', 'loop'].includes(command)) {
             const mode = distube.setRepeatMode(message)
             message.channel.send(`Set repeat mode to \`${mode ? mode === 2 ? 'All Queue' : 'This Song' : 'Off'}\``).catch(err => 
              message.reply('You must be in a VC to execute this command!'))
           }
         
           if (command === 'stop') {
            distube.stop(message).catch(err => message.reply('There\'s no music to stop lol'))
            message.channel.send('Stopped the music!')
           }
         
           if (command === 'leave' || command === 'bye') {
            distube.voices.get(message)?.leave();
            message.channel.send('Left the voice channel! 🥲👋🏼');
          }

           if (command === 'resume') { 
             distube.resume(message).catch(err => 
              message.reply('You must be in a VC!'))
            message.channel.send("⏯ Resumed") }
         
           if (command === 'pause') { distube.pause(message).catch(err => message.reply('You must be in a VC to use this command!'))
              message.channel.send("⏸ Paused")}
         
           if (command === 'skip') { distube.skip(message).catch(err => message.reply('You must be in a VC to use this command!'))
                message.channel.send("<:LEDcat:840237693383344178> Skipped!") }


           if (command === 'queue') {
             const queue = distube.getQueue(message)
             if (!queue) {
               message.channel.send('Nothing playing right now!')
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
        
         
        //moderation
    
    if (command === 'purge') {
      if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) {
        client.commands.get('purge').execute(message, args, Discord) }
      else{ message.reply("Hey you ain't a mod or admin >:(") 
    }}

    if (command === 'clear') {
     if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) {
      client.commands.get('clearc').execute(message, args, Discord) }
      else{ message.reply("Hey you ain't a mod or admin >:(")
     }}
      
    if (command === 'kick') {
      if(message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) {
      client.commands.get('kick').execute(message, args, Discord) }
      else{ message.reply("Hey you ain't a mod or admin >:(")
      }}

    if (command === 'ban') {
      if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) {
      client.commands.get('ban').execute(message, args, Discord) }
      else{ message.reply("Hey you ain't a mod or admin >:(")
      }}

    if (command === 'sm' || command === 'slowmode') {
      if (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) {
      client.commands.get('slowmode').execute(message, args, Discord)}
      else { message.reply("Hey you ain't a mod or admin >:(")
      }}

    if (command === 'nickname') { 
      (message.member.roles.cache.has("434006808789647370") || message.member.roles.cache.has("453618428373368832")) ?
      client.commands.get('nickname').execute(message, args, Discord) : message.reply("Hey you ain't a mod or admin >:(")
    }
    
    if (command === 'help') { client.commands.get('help').execute(message, args, Discord) }
    
    if (command === 'helpmod') { client.commands.get('helpmod').execute(message, args, Discord) }

    if (command === 'helpmusic') { client.commands.get('helpmusic').execute(message, args, Discord) }
    
    if (command === 'ping') { client.commands.get('ping').execute(message, args, Discord) }
    
    if (command === 'catto') { client.commands.get('catto').execute(message, args, Discord) }
    
    if (command === 'doggo') { client.commands.get('doggo').execute(message, args, Discord) }
    
    if (command === 'animal') { client.commands.get('animal').execute(message, args, Discord) }
    
    if (command === 'birb') { client.commands.get('birb').execute(message, args, Discord) }
    
    if (command === 'rosie') { client.commands.get('rosie').execute(message, args, Discord) }


    }
      else{
        message.author.send("Hey, you gotta use my commands in sheepy server :)")


      }
 

})



//-------//


const status = queue =>
	`Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(', ')
		|| 'Off'}\` | Loop: \`${
		queue.repeatMode
			? queue.repeatMode === 2
				? 'All Queue'
				: 'This Song'
			: 'Off'
	}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``

// DisTube event listeners, more in the documentation page
distube
	.on('playSong', (queue, song) => {

    const PlayingMusic = new MessageEmbed()
    .setColor('#3EFF00')
    .setTitle('<:screaming_cat:766014264908840970> Playing' +  `\n \n${song.name}`)
    .addField('Requested By', `${song.user}`)
    .setTimestamp()
    .setFooter(`${status(queue)}`);
    

		queue.textChannel.send({ embeds: [PlayingMusic] }
    )})

	.on('addSong', (queue, song) => {

  const AddingMusic = new MessageEmbed()
  .setColor('#00FFD8')
  .setTitle('✅ Adding'+  `\n${song.name}` + ' to the queue')
  .addField('Requested By', `${song.user}`)
  .setTimestamp()
  .setFooter(`${status(queue)}`);
  
  queue.textChannel.send({embeds: [AddingMusic]} )
  })

	.on('addList', (queue, playlist) =>{
  const AddingList = new MessageEmbed()
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
	.on('finish', queue => queue.textChannel?.send('Finished queue!'))


	.on('finishSong', queue =>
		queue.textChannel?.send('Finished song!'),
	)
	.on('disconnect', queue =>
		queue.textChannel?.send('Disconnected!🥲'),
	)
	.on('empty', queue =>
		queue.textChannel?.send(
			'The voice channel is empty! Leaving the voice channel 👋🏼',
		),
	)


	// DisTubeOptions.searchSongs = true
	.on('searchResult', (message, result) => {
		let i = 0;
		message.channel.send(
			`**Choose an option from below**\n${result
				.map(
					song =>
						`**${++i}**. ${song.name} - \`${
							song.formattedDuration
						}\``,
				)
				.join(
					'\n',
				)}\n*Enter anything else or wait 30 seconds to cancel*`,
		);
	})
	.on('searchCancel', message =>
		message.channel.send('Searching canceled'),
	)
	.on('searchInvalidAnswer', message =>
		message.channel.send('Invalid number of result.'),
	)
	.on('searchNoResult', message =>
		message.channel.send('No result found!'),
	)
	.on('searchDone', () => {});


  

client.login(process.env.DJS_TOKEN);