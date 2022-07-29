module.exports = {
    "name": "brakmiejsca",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Sposoby na zwolnienie miejsca na serwerze",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Jak zaoszczędzić miejsce na serwerze?")
            .setDescription('W pierwszej kolejności warto usunąć folder `/logs/`.\n\n' +
                'W przypadku korzystania z komendy `/locate`, powinieneś usunąć pliki w folderze world/region, które mają poniżej 20kb.\n\n' +
                'Warto jest również zmniejszyć rozmiar mapy np. za pomocą pluginu "WorldBorder". Uniemożliwi to graczom nieskończone renderowanie świata.\n\n' +
                'Możesz także usunąć wygenerowane chunki, które nie są potrzebne. Zwolni to najwięcej miejsca na dysku. Można to zrobić za pomocą programu MCASelector. ' +
                'Poradnik do niego znajduje się [tutaj](https://github.com/Querz/mcaselector#usage) , a pobiera się [tu](https://github.com/Querz/mcaselector/releases/latest).\n\n' +
                'Jeśli twój serwer opiera się na modyfikacjach, sprawdź czy nie ma wśród nich moda na **backupy** - jeśli jest usuń go i stworzone przez niego pliki.\n\n' +
                '*Posiadacze pakietu Diamond mogą napisać prośbę o zwiększenie miejsca na serwerze w uzasadnionych przypadkach. (!support)*')


        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}