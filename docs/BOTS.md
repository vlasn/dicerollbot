# Bots

Here are all the awesome bots that were built _(copy-paste the example bot and fill in the details)_.

## Improbot

Improvised theatre is great - if only we knew when next shows happen! This bot will give you a schedule of upcoming
improvised theatre shows from [improvision.eu](https://improvision.eu).

- **Bot username**: `improbot@improvision.eu`
- **Team members**: [Ando Roots](https://twitter.com/sqrooted)
- **Problem to solve**: Keep people up-to-date when next improv shows happen
- **Main user groups**: Improvisers and audience
- **Repo link (if public)**: [github.com/anroots/hubot-workshop](https://github.com/anroots/hubot-workshop)

This is a demo bot for the workshop, so not really much to say.

Supported commands for the bot:

- `improbot get schedule` - List upcoming imporov events
- `improbot show <ID>` - Get information about a show

### Sample interaction with the bot

```text

> improbot get schedule

Here is the latest improvised theatre schedule from Improvision.eu.

- sYLWpckiK3 24 märts 19:00 Ruutu10 improkomöödia pühapäev: Täismaja & Kompanii
- BeLYTz4W3a 25 märts 19:00 Romantiline komöödia
- Zap4PFo4jS 05 aprill 19:00 Rõud trip
- zWJ5Ofwfst 12 aprill 20:00 Improteater IMPEERIUM Indrek Hargla eksklusiivsetel tekstidel
- 1eE2uBfVCV 14 aprill 18:00 Ruutu10 Meistrite liiga
- VyXF0SsB0X 21 aprill 19:00 Ruutu10 improkomöödia pühapäev: Täismaja & Kompanii
- YitxFoRdVS 19 mai 18:00 Ruutu10 Meistrite liiga

For more info about a show, use improbot show <UID>

> improbot show 1eE2uBfVCV

Ruutu10 Meistrite liiga

Ruutu10 meisterimproviseerijad on nüüd juba päevi vaielnud ja kaklenud, et kes neist on ikkagi Räpina parim improviseerija. Enne ei saa edasi minna, kui pole välja selgitatud absoluutne tšempion. Sel hooajal alustame teekonnaga, kus selgitame välja parima meie seast. Maikuuks selgub kõige osavam improviseerija. Andres, Martin, Rauno, Toivo ja Jürmo astuvad teie poolehoiu nimel populaarsusvõistlusesse. Võistlejad astuvad üles, et täita improülesandeid, mis sisaldavad laulu, räppi, stseene, karaktereid, vaimukat dialoogi ning naerutavat situatsioonikomöödiat. Kasutada on lubatud ainult oma šarmi, improoskuseid ja ebaausaid võtteid.

Teadmiseks… see võistlus on meie jaoks ülimalt tähtis ning teile ajuvabalt naljakas ja meelelahutuslik. Et lisada Ruutu10 meistritele veel pinget, siis igal etapil ühineb võistlusega üks Ruutu10 värskeim improviseerija.

Tule toeta oma lemmikut ning veeda naerurohke õhtu vaadates improkomöödia etendust. Sel hooajal ainult 8 korda. Iga kord selgub etapi võitja. Hooaja peale kokku selgub üldine meister.

Tere tulemast vaatama - Ruutu10 Meistrite liiga.

LAVAL: Andres Kalle, Martin Junna, Rauno Meronen, Toivo Värbu, Jürmo Mehine + runner up
MUUSIKA: Veeda Kala

PILET:
Ticketeri eelmüügis: 10€
Samal päeval ja kohapeal: 15€

Piletimüük: https://www.ticketer.ee/ruutu10-meistrite-liiga-16092018

Etendus kestab kaks tundi ja on vaheajaga.

Tule veeda meiega üks teatrisportlik pühapäeva õhtu Von Krahlis!

Open event page
```
