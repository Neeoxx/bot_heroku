module.exports = {
    name: "roh",
    description: "roooooh t'es chiant",
    async execute(message, args, Discord){
        images = [
            "https://media4.giphy.com/media/iQHDtnUZ7gxI4/giphy.gif?cid=ecf05e47k4b7dvdu2mkn1nlf6em7lsjyakmtmc4p58905mox&rid=giphy.gif&ct=g",
            "https://media0.giphy.com/media/Y1Bl4MvP3fDq/giphy.gif?cid=ecf05e472n64rr3c08yw32o8tjb7k1y0nkoa47h4kdj6ame7&rid=giphy.gif&ct=g",
            "https://media2.giphy.com/media/7AWcocwsCpxmg/giphy.gif?cid=ecf05e479o76w8fguofhf51y084mrzyoi7flmpptiidozvlq&rid=giphy.gif&ct=g"
        ]

        personRoh = message.mentions.users.first()
            if(personToh){
            let RohEmbed = new Discord.MessageEmbed()
            .setTitle(`Rooooooooooh ${personHugged.username} t'es chiant la vie`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            
            message.channel.send(RohEmbed);
        }

    }

}