module.exports = {
    name: "cry",
    description: "lache t'es larmes",
    async execute(message, args, Discord){
        images = [
            "https://media1.tenor.com/images/3caea37ad3d608fc57231050f1d52a4c/tenor.gif",
            "https://media1.tenor.com/images/8f6da405119d24f7f86ff036d02c2fd4/tenor.gif",
            "https://media1.tenor.com/images/e0fbb27f7f829805155140f94fe86a2e/tenor.gif",
            "https://media1.tenor.com/images/0436bfc9861b4b57ffffda82d3adad6e/tenor.gif",
            "https://media1.tenor.com/images/5544c537be7aa645827e1ec2e130c35c/tenor.gif",
            "https://media1.tenor.com/images/5b2bbfcbc1724a0bdc1b48dcf89274d6/tenor.gif",
            "https://media1.tenor.com/images/d1529619add194c4275053d852a0bb79/tenor.gif",
            "https://media1.tenor.com/images/bf68ffe08e01d48f8f799a6974e9ff9a/tenor.gif"

        ]

        personCry = message.mentions.users.first()
            if(personCry){
            let cryEmbed = new Discord.MessageEmbed()
            .setTitle(` tu pleure sur ${personCry.username} :pensive: `)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
            
            message.channel.send(cryEmbed);
        }

    }

}