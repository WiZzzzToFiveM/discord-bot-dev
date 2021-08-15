const Discord = require('discord.js'),
  moment = require('moment')

module.exports = {
  run: (message, args, client) => {
    const member = message.mentions.members.first() || message.member
    message.channel.send(new Discord.MessageEmbed()
    .addField('🧑 Membre', member, true)
    .addField('🧿 Tag', member.user.tag, true)
    .addField('⏲ Date de création du compte', moment(member.user.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
    .addField('💰 Date de début de boost', member.premiumSince ? moment(member.premiumSince).format('[Le] DD/MM/YYYY [à] HH:mm:ss') : 'Vous ne boostez pas encore le serveur !', true)
    .setThumbnail(member.user.displayAvatarURL())
    .setFooter(`🎫 ID du compte : ${member.id}`))
  },
  name: 'info',
  guildOnly: true
}