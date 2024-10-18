//const fs = require('fs'); // Loads the Filesystem library
const { Client, GatewayIntentBits, Collection } = require('discord.js'); // Loads the Discord API library
const Config = require('./config.json'); // Loads the configuration values
const BotLib = require('./lib/bot.js');

// Loads our dispatcher classes that figure out what handlers to use in response to events
const Keywords = require('./dispatchers/keywordDispatch');
const Commands = require('./dispatchers/commandDispatch');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
}); // Initiates the client
client.botConfig = Config; // Stores the config inside the client object
client.botConfig.rootDir = __dirname; // Stores the running directory in the config

// Loads our handler functions that do all the work
BotLib.loadHandlers(client, 'commands');
BotLib.loadHandlers(client, 'keywords');

const cooldowns = new Collection(); // Creates an empty list for storing timeouts

// Starts the bot and makes it begin listening to events.
client.on('ready', () => {
    console.log('Bot Online');
});

// Handle user messages
client.on('message', message => {
    if (Keywords.handle(client, message)) {
        return; // If we handled a keyword, don't continue to handle events for the same message
    }

    if (Commands.handle(client, message, cooldowns)) {
        return; // If we handled a command, don't continue to handle events for the same message
    }
});

// Check if the token is present before trying to log in
if (!client.botConfig.token) {
    console.log('No token provided. Please enter a valid token in config.json.');
} else {
    // Log the bot in using the token provided in the config file
    client.login(client.botConfig.token).catch((err) => {
        console.log(`Failed to authenticate with Discord network: "${err.message}"`);
    });
}

