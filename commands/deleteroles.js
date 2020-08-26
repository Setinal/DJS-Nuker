const Discord = require("discord.js");

const ownerids = require('../ownerids.json')

module.exports.run = async(bot, message, args) => {

  if(!ownerids.ownerid.includes(message.author.id)) return;

message.guild.roles.forEach(message => {

  message.delete("Nuke")
 
});

  message.delete();

}