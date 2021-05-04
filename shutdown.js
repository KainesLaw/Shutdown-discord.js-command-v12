const Discord = module.require ("discord.js");
const client = new Discord.Client();

module.exports = {
    name: "shutdown",
    description: "Shuts down the bot",
    run: async (client, message, args) => {
        let isBotOwner = message.author.id == 'YOUR ID'; //change "YOUR ID" to your own ID using developer mode
        if (!isBotOwner) {
            return message.channel.send("This command is Developer only")
        }
        message.channel.send('Shutting down...').then(m => {
            client.destroy();
          });
          await message.channel.send("The bot has been shutdown 👍")
    }
}
