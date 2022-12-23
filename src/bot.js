const { Client, Collection, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const { DISCORD_TOKEN } = process.env;

dotenv.config();

// Initialize discord client
const client = new Client({ intents: GatewayIntentBits.Guilds });

// Extend client to keep a collection of commands
client.commands = new Collection();
client.commandArray = [];

// Load functions and send client to them
const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();

client
  .login(DISCORD_TOKEN)
  .then(() => console.log("Logged in!"))
  .catch(console.error);
