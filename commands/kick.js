const Discord = require('discord.js')

module.exports = {
  run: async (message, args) => {
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
      const member = message.mentions.members.first()
      if (!member) return message.channel.send('Veuillez mentionner le membre à exclure.')
      if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas exclure le propriétaire du serveur.')
      if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas exclure ce membre.')
      if (!member.kickable) return message.channel.send('Le bot ne peut pas exclure ce membre.')
      const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
      await member.kick(reason)
      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`${member.user} a été exclu`) 
      .setImage('https://cdn.discordapp.com/attachments/855200174691713054/855452374981148702/1623998061147.jpg'))
  },
  name: 'kick',
  guildOnly: true
}