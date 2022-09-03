module.exports = {
    name: "lovecalc",
    description: "calcule le taux d'amour",
    async execute(message, args, Discord){

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        personLoved = message.mentions.users.first()
            if(personLoved){
            let loveEmbed = new Discord.MessageEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** loves **${message.member.displayName}** this much:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);
            message.channel.send(loveEmbed);
        }

    }

}