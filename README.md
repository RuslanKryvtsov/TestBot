<<<<<<< HEAD
# Simple Discord JS Bot
A starter bot and "framework" to build Discord bots from.

## Version 2!
This updated version adds some new functionality to allow for the easy creation of more advanced
bots, and some updated help as well. The original simple-discord-js-bot code can be found [here on 
the v1.0 tag](https://github.com/bredmor/simple-discord-js-bot/tree/v1.0).

## Prerequisites
 * Node JS >= 12.0.0
 * NPM >= 6.9.0
 * Git

## Setup
1. Clone this repository: `git clone https://github.com/bredmor/simple-discord-js-bot.git` then navigate to the new 
   folder named `simple-discord-js-bot`
2. Install dependencies with `npm i`
3. Edit `config.json`, replacing the placeholder values with your desired command prefix and your bot token (If you 
   don't have one yet, see the note below on how to generate one.)
4. Start the bot with `node index.js`
5. Add the bot to the server of your choice by filling out the details in this 
   [handy application](https://discordapi.com/permissions.html#7168) and clicking the generated link.

That's it! You can now try out the default commands like `!bot help`, or create your own and restart the bot to use them.

>**Note:**
If you don't already have a Discord bot application setup you can create one by going to the 
> [Discord Developer Portal](https://discord.com/developers/applications/me), then create a new application, give it a 
> name, go to the "Bot" tab, then click on "Add Bot", and you're good to go!


## Usage
After adding the bot to a server, call its command via `!bot commandname` where "!bot" is the prefix you defined in 
config.js and "commandname" is the name of a command defined and exported in the `commands` folder.

You can safely delete or modify the example commands `talk.js` and `weather.js` but it is recommended to keep `help.js`.

## Running the bot permanently
It's recommended that you use a process monitor like [PM2](https://pm2.keymetrics.io/) to run the bot instead of 
just `node`, that way it can be restarted on crashes and monitored.

If you don't want to keep your computer on 24/7 to host the bot, I recommend a $5/month droplet from 
[DigitalOcean](https://m.do.co/c/b96f8bd70573).

## Defining Commands
Simply create a new js file in the `handlers/commands` subdirectory that exports at least a `name`, `description` 
and `usage` string, as well as an `execute()` method. 

You can additionally provide `aliases`, `cooldown` 
and `args`. There are examples for all of these keys and their usage in the 3 example commands.

## Other Handlers
In addition to simple `!command` style handlers, you can easily program the bot to listen and respond to any kind 
of event.

1. Create a subdirectory for the type of handler you want to add, such as the example `keywords` subdirectory.
2. Define at least one handler in that subdirectory, such as the example `handlers/keywords/lahee.js` handler. 
   This handler should export at least an `execute` function and `name` variable.
3. Instantiate a Loader for that subdirectory in `index.js`, for example: `BotLib.loadHandlers(client, 'keywords');` 
   replacing `keywords` with the name of your subdirectory. This will create a collection on the `client` object for 
   that handler type, named after your subdirectory.
3. Create a "dispatcher" in the `dispatchers` subdirectory that exports a `handle` function. This function should accept
   at least the `client` object, and probably the object representing the event you want to handle, such as a `message` 
   or `userReaction` event. The function should find the appropriate handler from the collection created in step 2, and 
   call the `execute()` function on the handler. The function should then return true, if an event was handled.
4. Register the handler in the appropriate event loop in `index.js`. For example, if the handler works on message 
   events,you would add it to the `client.on('message', => {` listener. It can be helpful here to check if the handler 
   executed and force a `return` to avoid unintentionally continuing to process other handlers on the same event.

### Notes
Why is there a ridiculous level of comments? I wrote this package to help someone with little programming experience 
learn how to write a bot. My hope is that people with little experience programming, or just little experience using
node.js will be able to easily create even advanced bots using this "framework".
=======
# Hello Node!

This project includes a Node.js server script and a web page that connects to it. The front-end page presents a form the visitor can use to submit a color name, sending the submitted value to the back-end API running on the server. The server returns info to the page that allows it to update the display with the chosen color. 🎨

[Node.js](https://nodejs.org/en/about/) is a popular runtime that lets you run server-side JavaScript. This project uses the [Fastify](https://www.fastify.io/) framework and explores basic templating with [Handlebars](https://handlebarsjs.com/).

_Last updated: 14 August 2023_

## Prerequisites

You'll get best use out of this project if you're familiar with basic JavaScript. If you've written JavaScript for client-side web pages this is a little different because it uses server-side JS, but the syntax is the same!

## What's in this project?

← `README.md`: That’s this file, where you can tell people what your cool website does and how you built it.

← `public/style.css`: The styling rules for the pages in your site.

← `server.js`: The **Node.js** server script for your new site. The JavaScript defines the endpoints in the site back-end, one to return the homepage and one to update with the submitted color. Each one sends data to a Handlebars template which builds these parameter values into the web page the visitor sees.

← `package.json`: The NPM packages for your project's dependencies.

← `src/`: This folder holds the site template along with some basic data files.

← `src/pages/index.hbs`: This is the main page template for your site. The template receives parameters from the server script, which it includes in the page HTML. The page sends the user submitted color value in the body of a request, or as a query parameter to choose a random color.

← `src/colors.json`: A collection of CSS color names. We use this in the server script to pick a random color, and to match searches against color names.

← `src/seo.json`: When you're ready to share your new site or add a custom domain, change SEO/meta settings in here.

## Try this next 🏗️

Take a look in `TODO.md` for next steps you can try out in your new site!

___Want a minimal version of this project to build your own Node.js app? Check out [Blank Node](https://glitch.com/edit/#!/remix/glitch-blank-node)!___

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

## You built this with Glitch!

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

- Need more help? [Check out our Help Center](https://help.glitch.com/) for answers to any common questions.
- Ready to make it official? [Become a paid Glitch member](https://glitch.com/pricing) to boost your app with private sharing, more storage and memory, domains and more.
>>>>>>> e3b2c81bdf51dba607c23698ddacd0eed11863cf
