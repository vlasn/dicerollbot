const dice = [
    'd100',
    'd20',
    'd12',
    'd10',
    'd8',
    'd6',
    'd4'
]

const chuck = (sides) => Math.ceil(Math.random() * sides)

const resBuilder = (rolls, sum) => `
Total: ${sum},
Individual rolls + modifiers: ${JSON.stringify(rolls)}
`

module.exports = (robot) => {
    robot.hear(/\/roll (.*)/, res => {
        const match = res.match[1]
        if (match) {
            const [full, _count = 1, _sides, modifier='+', _modifierAmount=0] = /([0-9]*)d([0-9][0-9]*)([+-]?)([0-9]*)/.exec(match)
            const count = Number(_count) === 0 ? 1 : Number(_count),
                  sides = Number(_sides),
                  modifierAmount = Number(_modifierAmount)
            let resStart = `Rolling ${count} d${sides} ${modifierAmount === 0 ? '' : `${modifier}${modifierAmount}`}\n`            
                  
            const rolledDice = Array.from({length: count})
                .map(() => chuck(sides))
            const modifiedDice = rolledDice
                .map(diceroll => {
                    if (['+', '-', '*', '/'].includes(modifier)) {
                        return {
                            '+': diceroll + modifierAmount,
                            '-': diceroll - modifierAmount,
                            '*': diceroll * modifierAmount,
                            '/': diceroll / modifierAmount
                        }[modifier]
                    } else {
                        return diceroll
                    }
                })
            if (sides === 20) {
                const natural20Count = rolledDice.filter(result => result === 20).length
                const natural1Count = rolledDice.filter(result => result === 1).length
                if (natural1Count) {
                    resStart += `Natural 1s: ${natural1Count} \n`
                }
                if (natural20Count) {
                    resStart += `Natural 20s: ${natural20Count} \n`
                }
            }

            res.send(resStart + resBuilder(modifiedDice, modifiedDice.reduce((a,v) => a+v,0))) 
        } else {
            res.send(`
Pick one of the following dice:
d100
d20
d12
d10
d8
d6
d4
`
            )
        }
    }) 
}