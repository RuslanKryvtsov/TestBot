// Поліфіл для ReadableStream, якщо він не визначений
if (typeof ReadableStream === 'undefined') {
    global.ReadableStream = require('stream-browserify').Readable;
}


// Підключення необхідних модулів
require('dotenv').config(); // Завантажує значення з файлу .env
const { Client, GatewayIntentBits, Collection } = require('discord.js'); // Завантажує бібліотеку Discord
const BotLib = require('./lib/bot.js'); // Завантажує бібліотеку для обробки команд

// Завантаження диспетчерів для обробки команд та ключових слів
const Keywords = require('./dispatchers/keywordDispatch');
const Commands = require('./dispatchers/commandDispatch');

// Ініціалізація клієнта
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Встановлення основної конфігурації
client.botConfig = {}; // Ініціалізація об'єкта конфігурації
client.botConfig.rootDir = __dirname; // Зберігання поточного каталогу виконання

// Завантаження обробників команд та ключових слів
BotLib.loadHandlers(client, 'commands');
BotLib.loadHandlers(client, 'keywords');

// Створення колекції для зберігання тайм-аутів
const cooldowns = new Collection();

// Запуск бота при підключенні
client.on('ready', () => {
    console.log('Bot Online');
});

// Обробка вхідних повідомлень користувачів
client.on('messageCreate', message => {
    if (Keywords.handle(client, message)) {
        return; // Якщо оброблено ключове слово, зупинити подальшу обробку
    }

    if (Commands.handle(client, message, cooldowns)) {
        return; // Якщо оброблено команду, зупинити подальшу обробку
    }
});

// Зчитування токена з .env та підключення до Discord
const token = process.env.DISCORD_TOKEN;
if (!token) {
    console.log('No token provided. Please set DISCORD_TOKEN in .env.');
} else {
    client.login(token).catch((err) => {
        console.log(`Failed to authenticate with Discord network: "${err.message}"`);
    });
}
