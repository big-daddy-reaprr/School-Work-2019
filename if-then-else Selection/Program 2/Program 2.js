function main()
    {
        var p1
        var p2
        var tcheck

        // Roll Amount
        var rm
        rm = 6
        parseInt(rm)

        document.write('<H1 class="subtitleu"> ROLL 1</H1>')
        
        p1 = rollDice(rm)
        document.write('<H1 class="subtitle"> Player 1 Number: '+p1+'</H1>')
        document.write(image(p1))

        p2 = rollDice(rm)
        document.write('<H1 class="subtitle"> Player 2 Number: '+p2+'</H1>')
        document.write(image(p2))
        
        if (p2 > p1)
            {
                document.write('<H1 class="subtitle2"> PLAYER 2 WINS </H1>')
            }

        else if (p2 < p1)
            {
                document.write('<H1 class="subtitle2"> PLAYER 1 WINS </H1>')  
            }

        else if (p2 == p1)
            {
                p2 = rollDice(rm)

                document.write('<H1 class="subtitleu"> ROLL 2</H1>')

                p1 = rollDice(rm)
                document.write('<H1 class="subtitle"> Player 1 Number: '+p1+'</H1>')
                document.write(image(p1))

                p2 = rollDice(rm)
                document.write('<H1 class="subtitle"> Player 2 Number: '+p2+'</H1>')
                document.write(image(p2))

                if (p2 > p1)
                    {
                        document.write('<H1 class="subtitle2"> PLAYER 2 WINS </H1>') 
                    }
                
                else if (p2 < p1)
                    {
                        document.write('<H1 class="subtitle2"> PLAYER 1 WINS </H1>')
                    }

                else if (p2 == p1)
                    {
                        document.write('<H1 class="subtitle2"> TIE </H1>')
                    }

                else
                    {
                        document.write('<H1 class="subtitle2"> ERROR </H1>')
                    }

            }

        else
            {
                document.write('<H1 class="subtitle2"> ERROR </H1>') 
            }
    }


function rollDice(x)
    {
        var randnum

        randnum = Math.random() * x
        return(Math.round(randnum + 0.5))
    }

function image(y)
    {
        if (y == 1)
            {
                return('<img src="Images/dice1.jpg">')
            }

        else if (y == 2)
            {
                return('<img src="Images/dice2.jpg">')
            }

        else if (y == 3)
            {
                return('<img src="Images/dice3.jpg">')
            }

        else if (y == 4)
            {
                return('<img src="Images/dice4.jpg">')
            }

        else if (y == 5)
            {
                return('<img src="Images/dice5.jpg">')
            }

        else if (y == 6)
            {
                return('<img src="Images/dice6.jpg">')
            }
    }