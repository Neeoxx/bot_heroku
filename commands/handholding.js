module.exports = {
    name: "handholding",
    description: "tien la main de ton partenaire",
    async execute(message, args, Discord){
        images = [
            "https://media1.tenor.com/images/8b03f8be2861cbb09a2071d8f5fd2445/tenor.gif",
            "https://media1.tenor.com/images/cc9bed0cfdcea77bd8cb5178ed7bf7bb/tenor.gif",
            "https://media1.tenor.com/images/cfe0b579ab0a0e5d9a939860d6e691f4/tenor.gif",
            "https://media1.tenor.com/images/d3c5561f3850d35ec5535dac4de2aa59/tenor.gif",
            "https://media1.tenor.com/images/b46b4c6e802545843696e664901f36be/tenor.gif"

        ]

        personHand = message.mentions.users.first()
            if(personHand){
            let handEmbed = new Discord.MessageEmbed()
            .setTitle(` tu tiens la main de ${personHand.username} :handshake: `)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            
            message.channel.send(handEmbed);
        }

    }

}