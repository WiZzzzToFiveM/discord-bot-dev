const Discord = require('discord.js')

module.exports = {
  run: async (message, args) => {
      if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
      const member = message.mentions.members.first()
      if (!member) return message.channel.send('Veuillez mentionner le membre à bannir.')
      if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir le propriétaire du serveur.')
      if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas Bannir ce membre.')
      if (!member.bannable) return message.channel.send(new Discord.MessageEmbed()
      .setTitle('*Le bot peut pas bannir cette personne'))
      const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
      await member.ban({reason})
      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`${member.user} a été ban`))
  },
  name: 'ban',
  guildOnly: true
}