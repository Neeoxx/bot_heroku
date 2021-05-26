module.exports = {
    name: "bite",
    description: "mord le/la",
    async execute(message, args, Discord){
        images = [
            "https://media1.tenor.com/images/2a11c95dc96bb7ff64297f66b8a1b019/tenor.gif",
            "https://media1.tenor.com/images/62bb855ef9b5b01aacdc9c69e2101afb/tenor.gif",
            "https://media1.tenor.com/images/785facc91db815ae613926cddb899ed4/tenor.gif",
            "https://media1.tenor.com/images/2fea7567f38e27d7d571b32e87d0dd15/tenor.gif",
            "https://media1.tenor.com/images/3f96028d350fba6c016a9c29aaf6fb80/tenor.gif",
            "https://media1.tenor.com/images/c44d08edc28ec862abbd69d799cbd673/tenor.gif"

        ]

        personBiten = message.mentions.users.first()
            if(personBiten){
            let biteEmbed = new Discord.MessageEmbed()
            .setTitle(` tu mord ${personBiten.username} :drool: `)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            
            message.channel.send(biteEmbed);
        }

    }

}