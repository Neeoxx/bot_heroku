module.exports = {
    name: "roh",
    description: "roooooh t'es chiant",
    async execute(message, args, Discord){
        images = [
            "https://media4.giphy.com/media/iQHDtnUZ7gxI4/giphy.gif?cid=ecf05e47k4b7dvdu2mkn1nlf6em7lsjyakmtmc4p58905mox&rid=giphy.gif&ct=g",
            "https://media0.giphy.com/media/Y1Bl4MvP3fDq/giphy.gif?cid=ecf05e472n64rr3c08yw32o8tjb7k1y0nkoa47h4kdj6ame7&rid=giphy.gif&ct=g",
            "https://media2.giphy.com/media/7AWcocwsCpxmg/giphy.gif?cid=ecf05e479o76w8fguofhf51y084mrzyoi7flmpptiidozvlq&rid=giphy.gif&ct=g",
            "https://c.tenor.com/jv-3NEyxpBwAAAAd/anime-yawning.gif",
            "https://c.tenor.com/hclnFXnLhQ0AAAAC/pikachu-yawn.gif",
            "https://c.tenor.com/XsFYCdV_mfQAAAAd/cat-annoyed.gif",
            "https://c.tenor.com/GzYlN2cspHQAAAAC/milk-and.gif",
            "https://c.tenor.com/uoY2tJUMoH4AAAAC/hachioji-naoto-annoyed-senpai-annoyed.gif",
            "https://c.tenor.com/3EgO4ozQzp4AAAAC/anime-raphtalia.gif",
            "https://c.tenor.com/UO-rToKtvIgAAAAC/pout-anime-pout.gif",
            "https://c.tenor.com/L2eobON0t84AAAAC/anime-pout.gif",





        ]

        personRoh = message.mentions.users.first()
            if(personRoh){
            let RohEmbed = new Discord.MessageEmbed()
            .setTitle(`Rooooooooooh ${personRoh.username} t'es chiant la vie`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            
            message.channel.send(RohEmbed);
        }

    }

}