module.exports = {
    "name": "java",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Zmiana wersji javy na hostingu craftserve",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Zmiana wersji Javy")
            .setDescription('Wersje 1.17 i 1.18 wprowadzają wymóg używania odpowiednio javy 16 i 17. By zmienić wersję javy należy wybrać wersję, która nas interesuje oraz zatwierdzić dwa razy.');

        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}
