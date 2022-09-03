// const { RichEmbed } = require("discord.js");
// const { getMember } = require("../../functions.js");

module.exports = {
    name: "love",
    description: "Calculates the love affinity you have for another person.",
    async (message, args, Discord){

        let person = getMember(message, args[0]);
        if (!person || message.author.id === person.id) {
            person = message.guild.members
                .filter(m => m.id !== message.author.id)
                .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        personLoved = message.mentions.users.first()
        if(personLoved){
        let loveEmbed = new Discord.MessageEmbed()
        .setColor("#ffb6c1")
        .addField(`☁ **${personloved.displayName}** loves **${personLoved.username}** this much:`,
        `💟 ${Math.floor(love)}%\n\n${loveLevel}`);
        
        message.channel.send(loveEmbed);
      }
    }
}