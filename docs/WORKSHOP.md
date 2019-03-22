# Botshop 2.0 - Build your own chat bot

## Getting started

You'll need to [create a new Hubot bot][Hubot docs]. Two options for that:

### Clone this sample repository

- Clone this repository
- Rename all occurrences of "improbot" to your bot name
- Write your own scripts under `scripts/`

### Generate a new Hubot from scratch

- See example of commands below. Make sure to use the correct Chat driver (`fleep`). When in doubt, refer to [Hubot docs][].

```bash
$ npm install -g yo generator-hubot
$ mkdir snarky-marketing-bot
$ cd snarky-marketing-bot
$ yo hubot
                     _____________________________  
                    /                             \ 
   //\              |      Extracting input for    |
  ////\    _____    |   self-replication process   |
 //////\  /_____\   \                             / 
 ======= |[^_/\_]|   /----------------------------  
  |   | _|___@@__|__                                
  +===+/  ///     \_\                               
   | |_\ /// HUBOT/\\                             
   |___/\//      /  \\                            
         \      /   +---+                            
          \____/    |   |                            
           | //|    +===+                            
            \//      |xx|                            

? Owner Ando Roots <ando@sqroot.eu>
? Bot name snarky-marketing-bot
? Description This bot gives you snarky marketing pitches
? Bot adapter fleep
   create bin/hubot
   create bin/hubot.cmd
   create Procfile
   create README.md
   create external-scripts.json
   create hubot-scripts.json
   create .gitignore
   create package.json
   create scripts/example.coffee
   create .editorconfig
                     _____________________________  
 _____              /                             \ 
 \    \             |   Self-replication process   |
 |    |    _____    |          complete...         |
 |__\\|   /_____\   \     Good luck with that.    / 
   |//+  |[^_/\_]|   /----------------------------  
  |   | _|___@@__|__                                
  +===+/  ///     \_\                               
   | |_\ /// HUBOT/\\                             
   |___/\//      /  \\                            
         \      /   +---+                            
          \____/    |   |                            
           | //|    +===+                            
            \//      |xx|
```

### Starting the bot

We'll be working with the [Fleep.io][] chat app as the chat driver of Hubot. Go ahead and create a new Fleep account
for your bot. Note down the bot's e-mail and password. To start the bot, you need to provide account details to Hubot
as environment variables.

Hubot will connect to Fleep API as the bot user, and start listening to new messages. When it "hears" the correct
keywords, it will activate and send a message back as the bot user.

```bash
$ docker run --net=host -d redis
$ export HUBOT_FLEEP_EMAIL=improbot@improvision.eu
$ export HUBOT_FLEEP_PASSWORD=REDACTED_PASSWORD
$ bin/hubot
up to date in 0.682s
[Thu Mar 21 2019 20:20:11 GMT+0200 (EET)] INFO Starting Hubot with the Fleep.io adapter...
[Thu Mar 21 2019 20:20:11 GMT+0200 (EET)] WARNING Loading scripts from hubot-scripts.json is deprecated and will be removed in 3.0 (https://github.com/github/hubot-scripts/issues/1113) in favor of packages for each script.
[Thu Mar 21 2019 20:20:11 GMT+0200 (EET)] INFO hubot-redis-brain: Discovered redis from REDIS_URL environment variable
[Thu Mar 21 2019 20:20:11 GMT+0200 (EET)] INFO hubot-redis-brain: Initializing new data for marketing-bot brain
[Thu Mar 21 2019 20:20:11 GMT+0200 (EET)] INFO Successfully connected improbot with Fleep
```

You should see logs that the bot has successfully connected to Fleep (to increase log levels, set environment variable
`HUBOT_LOG_LEVEL=debug`. At this point, the bot is waiting for new messages.

Using another Fleep account, create a new conversation with the bot user and send:

```
improbot help
```

... where `improbot` is the bot name. The bot should respond with its help text.

You're all set to start scripting!

## Scripting

Start creating your awesome bot scripts into files in `scripts/`. An example script called `improbot.js` is provided.

See the following resources for documentation and help:

- `EXAMPLES.md` for API methods you can use in your scripts
- [Hubot docs][]
- [hubot-fleep][], the Fleep driver package for Hubot

[hubot-fleep]: https://github.com/anroots/hubot-fleep
[Hubot docs]: https://hubot.github.com/docs/
[Fleep.io]: https://fleep.io
