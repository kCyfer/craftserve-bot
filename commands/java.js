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
            .setDescription('Minecraft 1.17 oraz 1.18 wprowadzają wymóg używania odpowiednio Javy 16 i 17.\n\nPanel Craftserve przy wyborze silnika sam rozpoznaje czy wymagana jest zmiana wersji Javy - w takiej sytuacji zostaniemy poproszeni o potwierdzenie zmiany dwa razy (raz dla silnika oraz raz dla wersji Javy).');

        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}
