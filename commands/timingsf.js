module.exports = {
    "name": "forgetimings",
    "options": [
        {
            "name": "Tekst",
            "description": "Tekst wyświetlany przed odpowiedzą bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Diagnostyka lagów",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Timingi Forge")
            .setDescription('https://mcforge.readthedocs.io/en/latest/gettingstarted/debugprofiler/')


        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}