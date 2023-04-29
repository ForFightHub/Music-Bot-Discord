//Loading .env File!
require("dotenv").config();


//First
const fs = require("fs");
const { Collection, Client } = require("discord.js");


//Discord Bot Client
const client = new Client();


//Client.commands As A Discord.js Collection
client.commands = new Collection();
client.queue = new Map()


//Set Perfix
client.config = {
  prefix: process.env.PREFIX
}


//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});


//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});


//Logging in to discord
client.login(process.env.TOKEN)
