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
            .setDescription('Hosting Craftserve.pl wykonuje kopie serwerów codziennie w nocy (w godzinach między północą a 3-4 rano). Nie ma możliwości przywrócenia stanu serwera sprzed np. 15 minut.\n\nJeżeli chcesz otrzymać kopię zapasową z danego dnia, napisz do nas na support (zakładka Kontakt w panelu, bądź mailowo - support@craftserve.pl).\nKopie wydawane są w formie archiwum .tar (bezproblemowego do otwarcia WinRarem bądź 7-zipem) do samodzielnego wypakowania i wgrania na serwer.\n\nDrugą opcją jest plugin **coreprotect**. Od momentu wgrania go na serwer rejestruje wszystkie dokonane zmiany w świecie i umożliwia ich cofnięcie jedną komendą: `/co rollback u:<user> t:<time> r:<radius> a:<action> i:<include> e:<exclude>`. Dla przykładu, wpisanie `/co rollback u:Mareczek_13 t:2m` cofnie wszystko, co w ciągu 2 minut zrobił gracz Mareczek_13. Dokumentację pluginu znajdziesz [**tutaj**](<https://docs.coreprotect.net/commands/>), a najnowszą wersję pobierzesz [**tutaj**](<https://www.spigotmc.org/resources/coreprotect.8631/download?version=446084>).')


        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}
