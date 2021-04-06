const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql',
    logging: false,
});

bot.mysql = sequelize;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

require("./mysql")(bot);
require("./commandHandler")(bot);
require("./events/eventHandler")(bot);

bot.on('message', message => {
    if (message.author.bot) {
        return;
    }
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();


    const command = bot.commands.get(cmd) ?? bot.commands.get(bot.aliases.get(cmd));

    bot.embed = new Discord.MessageEmbed()
        .setColor(0x224d21)
        .setFooter(`Komenda !${cmd} | ${message.author.tag}`)
        .setTimestamp();

    if(command) command.run(bot, args, message);
});

bot.login(config.token);
