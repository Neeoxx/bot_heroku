const Discord = require('discord.js');
const Client = new Discord.Client();
const fs = require('fs');
const prefix = 'b!';
const ytdl = require("ytdl-core");
require('dotenv').config();
const fetch = require("node-fetch");
const { listenerCount } = require('events');
const replies = [

    'je te kiff trooop !',
    'veux-tu mépouser ?',
    'je veux te prendre dans mes bras',
    'Liam & Alya seront le prénom de nos petits',
    "je t'aime tellement fort",
    "Ma raison de vivre c'est toi",
    "je t'aime + que 3x1000",
    "tu me manque"

  ]
    Client.on("ready", () => {
    Client.user.setStatus("online");
    Client.user.setActivity("Les amoureux", { type: "WATCHING" });
  });

  Client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
  
    //b!ping
    if (message.content == prefix + "ping") {
      message.channel.send("tu t'es cru au tennis de table fdp ?");
    }
  
    //b!avatar
    if (message.content == prefix + "avatar") {
      message.reply(message.author.displayAvatarURL());
    }

    //****MUSIQUE****//

  //b!play

  //b!play
if(message.content.startsWith(prefix + "play")){
  if(message.member.voice.channel){
    let args = message.content.split(" ");

    if(args[1] == undefined || !args[1].startsWith("https://www.youtube.com/watch?v=")){
      message.reply("Lien de la vidéo non ou mal mentionné")
    }
    else{
      if(list.length > 0){
        list.push(args[1]);
        message.reply("Vidéo ajouté à ta liste !");

        message.member.voice.channel.join().then(connection => {
          playMusic(connection);

          connexion.on("disconnect", () =>{
            list = [];
          })
        }).catch(err =>{
          message.replay("Errur lors de la connection : "+ err );
        })
      }
    }

  }
}

function playMusic(connection){
  let dispatcher = connection.play(ytdl(list[0], {quality: "highestaudio"}));

  dispatcher.on("finish", () => {
    list.shift();
    dispatcher.destroy();

    if(list.length > 0){
      playMusic(connection);
    }
    else {
      connection.disconnect();
    }

    dispatcher.on('error', err => {
      console.log("erreur de dispatcher: " + err);
      dispatcher.destroy();
    
    })
  })
}




//****BAN ET KICK*****//
//b!ban//
if (message.content.startsWith('b!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
            reason: 'il/elle est tarpain méchant zeubi',
          })
          .then(() => {
            message.reply(`j'ai banni ${user.tag}`);
          })
          .catch(err => {
            message.reply('impossible de le bannir wsh');
            console.error(err);
          });
      } else {
        message.reply("il est même pas à l'interieur de ton serveur !");
      }
    } else {
      message.reply("ta même pas mentionner celui que tu veux ban");
    }
  }

  //b!kick
  if (message.content.startsWith('b!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`j'ai high-kick ${user.tag}`);
          })
          .catch(err => {
            message.reply('je peut pas high-kick le boug');
            console.error(err);
          });
      } else {
        message.reply("il est même pas à l'interieur de ton serveur !");
      }
    } else {
      message.reply("ta même pas mentionner celui que tu veux high-kick");
    }
  }


  const embed = new Discord.MessageEmbed()

	.setColor('#FF00FF')
	.setTitle('LES COMMANDES DU SERVEUR :')
	.setAuthor('Match', 'https://i.pinimg.com/564x/5f/e6/63/5fe663abdb6d629b5003f74d54a10260.jpg')
	.addFields(
		{ name: 'Préfix :', value: "le préfix du serveur est : `b!` et c'est grâce à cela que tu pourra faire les commandes du serveur ! "},
		//{ name: '\u200B', value: '\u200B' }, saut de ligne //
		{ name: 'commande fun (gif/musique/avatar etc )', value: '`b!ping` = permet de faire un ping-pong avec le bot / `b!avatar` = pour voir ton joli logo en grand ! / `b!play` = permet de mettre ta musique préféré dans un channel (exemple : `b!play + lien de ta musique`) / `b!gif` = permet de poster un gif de ton choix ! (exemple : `b!gif cat`) / `b!kiss` = pour embrasser celui/Celle que tu aime tant / `b!hug` = permet de calîner ton être le plus cher / `b!baka` = permet de insulter ton pote imbécile ! / `b!mord`= permet de mordre ton/ta partenaire / `b!handholding` = permet de tenir la main a une personne qui te tient à coeur ', inline: false },
	)
	.addField('commandes des modos et des admins :', '`b!ban` = je dois vraiment détaillé cette commande ? / `b!kick` = permet de mettre un high-kick au gens comme toi qui ne respecte pas la loi', true)
	.setTimestamp()
	.setFooter('commande b!help');
if(message.content.startsWith('b!help')){
   message.channel.send(embed);
}

})

//****LES GIFS****//
Client.on('message', gotMessage);

async function gotMessage(msg) {
  let tokens = msg.cleanContent.split(" ");

  if (tokens[0] === "b!love") {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);

  } else if (tokens[0] == "b!gif") {
    if (tokens.length > 1) {
      keywords = tokens.slice(1, tokens.length).join(" ");
    }

    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
  }}


Client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command);
}// In order for this to work you must make a folder called commands

Client.once('ready', () => {
    console.log('Bot is online');// this sends a message to you in the console when the bot is online

    Client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot)return;
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
            
        if(command ==='hug'){
          Client.commands.get('hug').execute(message, args, Discord);
        }else if(command === 'kiss'){
            Client.commands.get('kiss').execute(message, args, Discord);
        }else if(command === 'baka'){
            Client.commands.get('baka').execute(message, args, Discord);
        }else if(command === 'handholding'){
            Client.commands.get('handholding').execute(message, args, Discord);
        }else if(command === 'mord'){
          Client.commands.get('mord').execute(message, args, Discord);
        }else if(command === 'cry'){
          Client.commands.get('cry').execute(message, args, Discord);
        }else if(command === 'smile'){
          Client.commands.get('smile').execute(message, args, Discord);
        }else if (command ==='lewd'){
          Client.commands.get('lewd').execute(message, args, Discord);
        }


    });
});


Client.login(process.env.BOTTOKEN);