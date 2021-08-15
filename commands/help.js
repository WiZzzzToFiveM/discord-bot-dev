const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('***CDC***')
            .setDescription(`  
            *CDC*
  
            **:question: Modération !**
            ***cdc/kick***
            __*Pour expulser une personne*__
            ***cdc/ban***
            __*Pour bannir une personne*__
            ***cdc/warn***
            __*Mettre un avertissement à une personne*__
            ***cdc/unwarn***
            __*Enlever un avertissement à une personne*__
            
            -------------------------------
            
            **:ticket: Ticket !**
            ***cdc/ticket***
            __*Créer un ticket*__
            ***cdc/close***
            __*Fermer un ticket*__
            
            ------------------------------
            
            **:file_folder: Information**
            ***cdc/info***
            __*Pour voir les information de votre compte*__
            ***cdc/ip***
            __*Pour voir l\'ip du serveur*__`)
            .setColor('PURPLE')
            .setImage('https://cdn.discordapp.com/attachments/855200174691713054/855452374981148702/1623998061147.jpg'))
    },
    name: 'help'
}