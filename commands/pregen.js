module.exports = {
    "name": "pregen",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Poprawa wydajności serwera",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Pregen mapy")
            .setDescription('Jednym z ważniejszych etapów robienia serwera jest wygenerowanie świata. Pomaga to m.in. w zmniejszeniu lagów. Aby to zrobić należy wgrać plugin [chunky](https://spigotmc.org/resources/chunky.81534/) oraz wpisać dwie komendy **/chunky radius <zasięg>** oraz **/chunky start**. \nDokładny opis plugin można znaleźć pod tym [linkiem](<https://github.com/pop4959/Chunky/wiki/Commands>).')


        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}
