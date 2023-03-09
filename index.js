const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
const mySecret = process.env['TOKEN']

client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
 });

client.on('message', msg => {
  if (msg.author.bot) return;
  const response = 'Sawman_UK is a C L O W N! Honk Honk';
  msg.channel.send(response);
});

client.login(token);
