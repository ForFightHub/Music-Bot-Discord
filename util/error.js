const { MessageEmbed } = require("discord.js")

// Just For Errors!
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(text)
    .setFooter("OpS something went wrong!")
    await channel.send(embed)
}