function rollDice(x)
    {
        var rand
        
        rand = Math.random() * x
        return(Math.round(rand + 0.5))
    }

function main()
    {
        var t
        var s
        var roll

        t = prompt('How many sides on Dice?')
        s = prompt('What side to test?')

        roll = 0

        parseInt(t)
        parseInt(s)
        parseInt(roll)

        while (roll != s)
            {
                roll = rollDice(t)
                
                document.write(roll)
                document.write('<BR>')
            }
    }