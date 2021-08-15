const Discord = require('discord.js')
const config = require('../config.json')
 
module.exports = {
    run: (message, args) => {
        if (!args[0]) return message.channel.send('Veuillez indiquer le message à envoyer.')
        message.delete()
        message.channel.send(new Discord.MessageEmbed()
        .setDescription((message.content.trim().slice(`${config.prefix}annonce`.length))))
        message.channel.send('@here')
    },
    name: 'annonce',
    guildOnly: true
}