module.exports = {
    name: "lewd",
    description: "envoies des choses coquines",
    async execute(message, args, Discord){
        images = [
            "https://media1.tenor.com/images/b43df533b92a60a6302a3fceb6ea532c/tenor.gif",
            "https://media1.tenor.com/images/526be2c25a804e5e75714719391d8deb/tenor.gif",
            "https://media1.tenor.com/images/fa27732ed9145801ad4bfc9bc3ec6eb7/tenor.gif",
            "https://media1.tenor.com/images/4a1a862b67878e74f1492218c1993c53/tenor.gif",
            "https://media1.tenor.com/images/9862e3023816f54bc451ee1cfed2351f/tenor.gif",
            "https://media1.tenor.com/images/d3313eccf8c32223884e13dca250f6df/tenor.gif",
            "https://media1.tenor.com/images/a4938ad63c4bd1465fa46939f0029f86/tenor.gif"

        ]

        personLewd = message.mentions.users.first()
            if(personLewd){
            let lewdEmbed = new Discord.MessageEmbed()
            .setTitle(` tu essaye de chauffer ${personLewd.username} :smirk: :tongue: `)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            
            message.channel.send(lewdEmbed);
        }

    }

}