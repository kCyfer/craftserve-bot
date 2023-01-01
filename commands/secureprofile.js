module.exports = {
    "name": "secureprofile",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Jak rozwiązać błąd 'Niewłaściwy podpis klucza publicznego profilu'",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Problem z wejściem na serwer?")
            .setDescription('Na wersjach od 1.19 może pojawić się komunikat:\n`Invalid signature for profile public key`\nlub\n`Niewłaściwy podpis klucza publicznego profilu`.\n\nW celu rozwiązania problemu należy przejść do plików serwera i w pliku `server.properties` zmienić wartość `enforce-secure-profile` na `false`\n\n**UWAGA!**\nWartość zmieniamy nawet gdy serwer działa w tzw. offline mode (online-mode=false).')
            .setImage(`https://cdn.discordapp.com/attachments/881557411264077867/1002368671827640320/unknown.png`)

        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}