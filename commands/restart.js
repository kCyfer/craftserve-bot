module.exports = {
    "name": "restart",
    "description": "Restartuje bota",
    "aliases": [],
    "hideHelp": true,
    run: async (bot, args, message) => {
        if(!bot.owners.includes(message.author.id)) return;
        await message.channel.send("Trwa restartowanie bota!");
        process.exit(0);
    }
}
