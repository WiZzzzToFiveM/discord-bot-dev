const Discord = require("discord.js");
const client = new Discord.Client({
  fetchAllMembers: true
});
const config = require("./config.json");
const fs = require('fs');
const fivereborn = require('fivereborn-query');

client.login(process.env.TOKEN)
client.commands = new Discord.Collection()
client.db = require('./db.json')

fs.readdir('./commands', (err, files) => {
  if (err) throw err
  files.forEach(file => {
      if (!file.endsWith('.js')) return
      const command = require(`./commands/${file}`)
      client.commands.set(command.name, command)
  })
})

client.on('message', message => {
  if (message.type !== 'DEFAULT' || message.author.bot) return

  const args = message.content.trim().split(/ +/g)
  const commandName = args.shift().toLowerCase()
  if (!commandName.startsWith(config.prefix)) return
  const command = client.commands.get(commandName.slice(config.prefix.length))
  if (!command) return
  command.run(message, args, client)
})


function activity() {
  setTimeout(() => {
    fivereborn.query(config.serverInfo[0], config.serverInfo[1], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        client.user.setActivity(data.clients + " joueurs en ligne", { type: config.activityType });
      }
    });
    activity();
  }, 10000);
}
activity();



client.once('ready', () => {
  console.log(`Connecté en tant que : ${client.user.tag}`)
})