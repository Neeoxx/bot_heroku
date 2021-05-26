module.exports = {
    name: "kiss",
    description: "fait un bisous à quelqu'un",
    async execute(message, args, Discord){
        images = [
            "https://media.giphy.com/media/MQVpBqASxSlFu/giphy.gif",
            "https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif",
            "https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif",
            "https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif",
            "https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif",
            "https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif",
            "https://media1.tenor.com/images/4b56464510f4c9cfbec9eda5a25c3a72/tenor.gif",
            "https://media1.tenor.com/images/6eeb17e94ceeeb6cff793326db0c33b8/tenor.gif",
            "https://media1.tenor.com/images/254a2bf580bc11ed8e18add52fb73158/tenor.gif",
            "https://media1.tenor.com/images/d0cd64030f383d56e7edc54a484d4b8d/tenor.gif",
            "https://media1.tenor.com/images/02d9cae34993e48ab5bb27763d5ca2fa/tenor.gif"

        ]

        personKissed = message.mentions.users.first()
            if(personKissed){
            let kissEmbed = new Discord.MessageEmbed()
            .setTitle(`Tu embrasse ${personKissed.username} :kiss: `)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            
            message.channel.send(kissEmbed);
        }

    }

}