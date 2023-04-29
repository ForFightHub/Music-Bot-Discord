module.exports = async (client, message) => {
  if (message.author.bot) return;


  //Prefixes Mention Match
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
  
  //Making The Command LowerCase
  const command = args.shift().toLowerCase();

  //Searching a Command
  const cmd = client.commands.get(command);
  
  //Searching a Command Aliases
  const aliases = client.commands.find(x => x.info.aliases.includes(command))

  //If(message.channel.type === "dm")return message.channel.send("Commands Doesn't Work At Dm! Just Use At Servers")
process.on("unhandledRejection", (reason, promise) => {
    try {
        console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
    } catch {
        console.error(reason);
    }
});
require('events').EventEmitter.defaultMaxListeners = 25


  //Executing The Codes When Get The Command Or Aliases
  if(cmd){
    cmd.run(client, message, args);
  }else if(aliases){
    aliases.run(client, message, args);
  }else return
};
