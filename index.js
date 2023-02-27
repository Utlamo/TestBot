// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
import { Client, GatewayIntentBits, Partials } from "discord.js";


const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on('messageCreate', async (message) => {
  console.log(message.content);
  client.user.setActivity(message.content);
});


//


//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);
