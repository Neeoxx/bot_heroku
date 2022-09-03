const randomPuppy = require("random-puppy");

module.exports = {
    name: "nude",
    description: "tqt",
     async execute(message, args, Discord){

        const subReddits = ["NudesFromGirls"];
        
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);

        let nsfwEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/NudesFromGirls`)
            .setURL(`https://reddit.com/r/NudesFromGirls`);

        message.channel.send(nsfwEmbed);

    }
}