const fs = require('fs'),
  Discord = require('discord.js')
 
module.exports = {
    run: async (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('Vous n\'avez pas la permission d\'utiliser cette commande.'))
        const member = message.mentions.members.first()
        if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('Veuillez mentionner le membre à unwarn.'))
        if (!client.db.warns[member.id]) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('Ce membre n\'a aucun warn.'))
        const warnIndex = parseInt(args[1], 10) - 1
        if (warnIndex < 0 || !client.db.warns[member.id][warnIndex]) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('Ce warn n\'existe pas.'))
        const { reason } = client.db.warns[member.id].splice(warnIndex, 1)[0]
        if (!client.db.warns[member.id].length) delete client.db.warns[member.id]
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${member} a été unwarn pour ${reason} !`))
    },
    name: 'unwarn',
    guildOnly: true
}