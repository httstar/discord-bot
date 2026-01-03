const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel]
});

const CHANNEL_ID = "1434223595923705987";
const EMOJI = "⭐";

client.once("ready", () => {
    console.log(`✅ Bot online como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.channel.id !== CHANNEL_ID) return;

    try {
        await message.react(EMOJI);
    } catch (err) {
        console.error("Erro ao reagir:", err);
    }
});

client.login("MTQ1NTM2MTg0ODc1MTY4OTc5MA.GUAU8h.rodWJ5oclp_-q_La3P6oYSs_XaWqedw8UTyA40");
