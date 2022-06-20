module.exports = {
    "name": "antyxray",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Anti-Xray w silniku Paper",
    "aliases": ["antixray", "anti-xray", "anty-xray"],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Anti-Xray w paper.yml")
            .setDescription("Silnik Paper, wraz z jego forkami posiadają wbudowany system **anti-xray**. By z niego skorzystać wystarczy ustawić go w pliku `paper.yml`.\n\n Rekomendowane ustawienia anty-xraya (razem z netherem) znajdziesz [**tutaj**](<https://docs.papermc.io/paper/anti-xray>)")

        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}