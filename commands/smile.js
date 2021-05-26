module.exports = {
    name: "smile",
    description: "lache un sourire",
    async execute(message, args, Discord){
        images = [
            "https://media1.tenor.com/images/4dcbf079df2a8e3c6c7a0bd8489c494d/tenor.gif",
            "https://media1.tenor.com/images/c5fad21f9828d19044a58f8b84a6e14b/tenor.gif",
            "https://media1.tenor.com/images/123df3be1acfe3306b91e9c3dd6f9438/tenor.gif",
            "https://media1.tenor.com/images/ccf37b8d4f44fca1bb80a76a719fc380/tenor.gif",
            "https://media1.tenor.com/images/aeb0ef81524736ebb6c1881398e076b7/tenor.gif",
            "https://media1.tenor.com/images/64e0528a06b474ffb14525c437da2544/tenor.gif",
            "https://media1.tenor.com/images/4ba139e6a0dbc0d0db24a483fec17266/tenor.gif",
            "https://media1.tenor.com/images/c63af10b76369b053f5bd89994e8d439/tenor.gif"

        ]

        personSmile = message.mentions.users.first()
            if(personSmile){
            let smileEmbed = new Discord.MessageEmbed()
            .setTitle(` tu souri avec / grâce à ${personSmile.username} :relaxed: `)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            
            message.channel.send(smileEmbed);
        }

    }

}