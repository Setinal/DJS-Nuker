const Discord = require("discord.js");

const ownerids = require('../ownerids.json')

module.exports.run = async(bot, message, args) => {
    
if(!ownerids.ownerid.includes(message.author.id)) return;

  let reason = args.join(" ")

  message.guild.members.forEach(message => {
     
    message.send(`${reason}`);
  
});
 
   message.delete();

}

