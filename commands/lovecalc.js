module.exports = {
    name: "lovecalc",
    description: "calcule le taux d'amour",
    async execute(message, args, Discord){
        images = [
            "https://c.tenor.com/PGXshKPAUh4AAAAC/my-dress-up-darling-anime-love.gif",
            "https://c.tenor.com/Gf7MgJEnHsIAAAAC/anime-love.gif",
            "https://c.tenor.com/kRDhw-dM7wQAAAAd/i-love-you-anya.gif",
            "https://c.tenor.com/8wkX1P750cwAAAAd/daddy-peeking.gif",
            "https://c.tenor.com/DZll3gcSP04AAAAC/love.gif",
            "https://c.tenor.com/Bd6-7UiSvTsAAAAC/bear.gif"
        ]

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "❤️".repeat(loveIndex) + "🖤".repeat(10 - loveIndex);


        personLoved = message.mentions.users.first()
            if(personLoved){
            let loveEmbed = new Discord.MessageEmbed()
            .setTitle(` CALCUL'AMOUR :heart:`)
            .setColor("#ffb6c1")
            .setImage(images[Math. floor(Math. random()*images. length)])
            .addField(`☁ **${personLoved.username}** aime **${message.member.displayName}** à :`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);
            message.channel.send(loveEmbed);
         } 
        
        else if(personLoveed == "413799676039397376")
        {
            let loveeEmbed = new Discord.MessageEmbed()
            .setTitle(` CALCUL'AMOUR :heart:`)
            .setColor("#ffb6c1")
            .setImage("https://c.tenor.com/dQdPx3fJBSsAAAAC/love-forever-infinity-heart.gif")
            .addField(`☁ Pas besoin de calcul ! **${personLoveed.username}** t'aime à : L'INFINI ♾️`);
            message.channel.send(loveeEmbed);
        }
    
}
}