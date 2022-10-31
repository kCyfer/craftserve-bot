module.exports = {
    "name": "backup",
    "options": [
        {
            "name": "tekst",
            "description": "Tekst wyświetlany przed odpowiedzią bota",
            "type": 3,
            "required": false,
        },
    ],
    "description": "Kopie zapasowe",
    "aliases": ["kopie"],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Kopie zapasowe serwerów")
            .setDescription('Hosting Craftserve.pl wykonuje kopie serwerów codziennie w nocy (w godzinach między północą a 3-4 rano). Nie ma możliwości przywrócenia stanu serwera sprzed np. 15 minut.\n\nJeżeli chcesz otrzymać kopię zapasową z danego dnia, napisz do nas na support (zakładka Kontakt w panelu, bądź mailowo - support@craftserve.pl).\nKopie wydawane są w formie archiwum .tar (bezproblemowego do otwarcia WinRarem bądź 7-zipem) do samodzielnego wypakowania i wgrania na serwer.\n\nKopię zapasową umożliwia również plugin **coreprotect**. Od momentu wgrania go na serwer rejestruje wszystkie dokonane zmiany w świecie i umożliwia ich cofnięcie komendą **/co rollback**. \n[**Pobierz najnowszą wersję**](<https://www.spigotmc.org/resources/coreprotect.8631/download?version=446084>) \n[**Dokumentacja pluginu**](<https://docs.coreprotect.net/commands/>)


        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}
