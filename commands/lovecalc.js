module.exports = {
    name: "love",
    aliases: ["affinité"],
    category: "fun",
    description: "calcule le taux d'amour d'une personne que tu aime (ou pas)",
    usage: "[mention | id |`username]",
    run: async (client, message, args) => {
        let person = getMember(message, args[0]);

        if (!person || message.author.id === person.id) {
            person = message.guild.members
            .filter(m => m.id !== message.auhtor.id)
            .random();
        }

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 100);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
    }
}