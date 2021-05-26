module.exports = {
    name: "baka",
    description: "t'es un baaakaaa",
    async execute(message, args, Discord){
        images = [
            "https://media1.tenor.com/images/b801384c6750d9227158795a7fd23eec/tenor.gif",
            "https://media1.tenor.com/images/e6ee9ecaf46a515f833173860e4c550b/tenor.gif",
            "https://media1.tenor.com/images/856a34bc945f740b7c4f31dfec044620/tenor.gif",
            "https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif",
            "https://media1.tenor.com/images/6256129dce6816a2adffb29cc845b420/tenor.gif",
            "https://media1.tenor.com/images/2b3a3e107ac57d4f170a8f8e414fec9f/tenor.gif",
            "https://media1.tenor.com/images/d381f1de7b525c2bbd21e803cbd253f4/tenor.gif"

        ]

        personBaka = message.mentions.users.first()
            if(personBaka){
            let bakaEmbed = new Discord.MessageEmbed()
            .setTitle(` t'es un baakaaaaa ${personBaka.username} :kissing: `)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            
            message.channel.send(bakaEmbed);
        }

    }

}