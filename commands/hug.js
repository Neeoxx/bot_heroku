module.exports = {
    name: "hug",
    description: "fait un calîn à quelqu'un",
    async execute(message, args, Discord){
        images = [
            "https://media1.tenor.com/images/0ba7e0d8cd4ea0e6043119030f2b051f/tenor.gif",
            "https://media1.tenor.com/images/7e30687977c5db417e8424979c0dfa99/tenor.gif",
            "https://media.giphy.com/media/Y8wCpaKI9PUBO/giphy.gif",
            "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
            "https://media.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif",
            "https://media1.tenor.com/images/5ccc34d0e6f1dccba5b1c13f8539db77/tenor.gif",
            "https://media1.tenor.com/images/c9e2e21f4eedd767a72004e4ab521c9d/tenor.gif",
            "https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif",
            "https://media1.tenor.com/images/539141a9d07925267140798682add061/tenor.gif",
            "https://media1.tenor.com/images/71ed0a487f9fd98d18117c80ca518d18/tenor.gif"

        ]

        personHugged = message.mentions.users.first()
            if(personHugged){
            let hugEmbed = new Discord.MessageEmbed()
            .setTitle(`Tu fais un calîn à ${personHugged.username} :heart: :pleading_face:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            
            message.channel.send(hugEmbed);
        }

    }

}