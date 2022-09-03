const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    description: "envoie un meme drole ou claqué au sol sa dépend",
     async execute(message, args, Discord){

        const subReddits = ["meme", "MemeFrancais", "dankmeme"];
        
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);

        let memeEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(memeEmbed);

    }
}