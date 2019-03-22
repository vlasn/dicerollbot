# Examples

See the official [docs][] on how to write scripts and what API-s are available.

## Fleep adapter API-s

[hubot-fleep][] adapter supports the following API-s.

### Send a message to the chat room

`.send` method sends a chat message to the room where the incoming message came from. This is visible to all room
participants.

```js
robot.hear(/I am sad/i, function(res){
    res.send('Dont be sad!');
});
```

### Send a private 1:1 message to the user

Similar to `.send`, but sends a private message to the author of the triggering envelope, only visible to them.

```js
robot.hear(/poke me/i, function(res){
    res.reply('POKE!');
});
```

### Change conversation topic

You can use this to change the conversation topic.

```js
robot.respond(/incident ongoing/i, function(res){
    res.topic('!!! ONGOING INCIDENT, CHECK STATUSPAGE FOR UPDATES !!!');
});
```

### Unsupported API-s

If you want to do something that the [hubot-fleep][] adapter does not currently support, you'll need to either work
around it (for example: the `.emote` method is not currently supported, but you can achieve the same result by using
`.send('((cat))')`; or implement it yourself into `hubot-fleep`.


### Security notes

Be aware that by default  _anyone_ can issue commands to your bot. If your bot performs any data-changing or sensitive
actions, you will want to add authorization logic at some point. 

[hubot-fleep]: https://github.com/anroots/hubot-fleep
[docs]: https://hubot.github.com/docs/scripting/
