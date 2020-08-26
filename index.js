const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
var prefix = '>'
 

const token = 'YOUR-TOKEN' // You can get your bot token from discord.com/developers [CREATE AN APP]


bot.on('ready', () =>{
    console.log('Fuck Skids'); // If the bot is ready, it logs this message
    
      bot.user.setActivity('Anti-Skids', { // This is the activity.
        type: 'Playing'
      });
      
    }
)

bot.on('message', message => {
bot.commands = new Discord.Collection()
fs.readdir('./commands/', (err, files) => {
  if(err) return console.error(err)             // For Command Folder
  files.forEach(f => {
    let x = require(`./commands/${f}`);
    bot.commands.set(x.help, x);
  
  })
})
const args = message.content.slice(prefix.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();

  if(message.content.startsWith(prefix)){
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    
  }
}
})

bot.login(token); // Logs in into your bot, there is nothing to change.

