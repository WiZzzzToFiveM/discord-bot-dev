const Discord = require('discord.js')

module.exports = {
  run: async (message, args) => {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
      message.channel.send(new Discord.MessageEmbed()
      .setTitle('CDC RP :star:')
      .setDescription(`
      *Bonjour à tous !*
      ------------------------------------------------------
      ***Le serveur est actuellement ouvert !***
      ------------------------------------------------------
      *Tuto FiveM pour se connecter au serveur !*
      ---------
      :one:- Allez sur FiveM
      ---------
      :two:- Faites F8 connect is87867.isaper.com:3124
     ---------
      :three:- Vous êtes dans Loading-Screen !
      ---------
      :four:- Bravo vous êtes connecté !
      -----------------------------------------------------
      ***Bon jeu à tous sur CDC RP !***
      `)
      .setColor('RED')
      .setImage('https://cdn.discordapp.com/attachments/855200174691713054/855693921711685632/cdcbannerbyprototype.jpg')
      .setTimestamp()
      .setURL(''))
  },
  name: 'ip',
  guildOnly: true
}