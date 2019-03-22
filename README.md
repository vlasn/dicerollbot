# improbot

improbot is a chat bot built on the [Hubot][hubot] framework. It is also a demo bot for a Hubot bot-building workshop.

See the `docs/` folder for workshop instructions.

[hubot]: http://hubot.github.com

### Running improbot locally

You can start improbot locally by running:

```bash
$ export HUBOT_FLEEP_EMAIL=improbot@improvision.eu
$ export HUBOT_FLEEP_PASSWORD=REDACTED_PASSWORD
$ bin/hubot
```

We'll be using [Fleep][fleep] as our chat driver via [hubot-fleep][]. You need to have a Redis instance running locally.
By default, it looks for redis on `localhost:6379` (you can customize this with `export REDIS_URL=redis://127.0.0.1:6379/bot-1`).

[fleep]: https://fleep.io
[hubot-fleep]: https://github.com/anroots/hubot-fleep

### Scripting

An example script is included at `scripts/improbot.coffee`, so check it out to
get started, along with the [Scripting Guide][scripting-docs].

[scripting-docs]: https://github.com/github/hubot/blob/master/docs/scripting.md

# License

MIT
