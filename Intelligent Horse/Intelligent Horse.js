var hm
var roll1
var roll2

function main()
    {
        var total

        roll1 = rollDice()
        roll2  = rollDice()

        parseInt(roll1)
        parseInt(roll2)

        total = roll1 + roll2

        hm =  2 * total

        nodHead()
    }

function rollDice()
    {
        var rand

        rand = Math.random() * 6
        return(Math.round(rand + 0.5))
    }

function nodHead()
    {
        var timerID
        
        hm = hm - 1

        var rolldice1IMG
        var rolldice2IMG

        rolldice1IMG = 'Images/dice' + roll1 + '.jpg'
        rolldice2IMG = 'Images/dice' + roll2 + '.jpg'

        document.rollDice1.src = rolldice1IMG
        document.rollDice2.src = rolldice2IMG

        if (hm %2 == 1)
            {
                document.arithmetic.src = 'Images/ball1.jpg'
            }

        else
            {
                document.arithmetic.src = 'Images/ball2.jpg'
            }

        if (hm > 0)
            {
                timerID = setTimeout("nodHead()", 300)
            }

    }
