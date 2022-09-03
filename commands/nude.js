const randomPuppy = require("random-puppy");

module.exports = {
    name: "nude",
    description: "tqt",
     async execute(message, args, Discord){

        const subReddits = ["NudesFromGirls", "nsfw",];
        
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);

        let nsfwEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(nsfwEmbed);

    }
}