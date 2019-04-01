var t1
var t2
var t3

t1 = {}
t2 = {}
t3 = {}

function main()
    {
        t1.s = prompt('Test 1 Score')
        t2.s = prompt('Test 2 Score')
        t3.s = prompt('Test 3 Score')

        document.write('<H1 class="subtitle2"> Grade: '+trueScore()+'</H1>')

        document.write('Test 1 Score: '+t1.s)
        document.write('<BR>')
        document.write('Test 2 Score: '+t2.s)
        document.write('<BR>')
        document.write('Test 3 Score: '+t3.s)
        document.write('<BR>')

        document.write('<HR>')

        document.write('Aggerate: '+getAdd())
    }

function getCheck()
    {
        if ((t1.s <= 14) || (t2.s <= 14) || (t3.s <= 14))
            {
                return(1)
            }
        
        else
            {
                return(0)
            }
    }

function getAdd()
    {
        return(parseInt(t1.s) + parseInt(t2.s) + parseInt(t3.s))
    }

function getScore()
    {
        var add

        add = getAdd()

        if (add <= 32)
            {
                return('D')
            }

        else if ((add >= 33) && (add < 42))
            {
                return('C')
            }

        else if ((add >= 42) && (add <= 51))
            {
                return('B')
            }

        else if (add >= 51)
            {
                return('A')
            }

        else
            {
                return('ERROR')
            }

    }

function trueScore()
    {
       if ((getCheck() == 1) || (getScore() == 'A'))
        {
            return('B')
        }

        else
            {
                return(getScore())
            }
    }

function debug()
    {
        console.log(t1.s)
        console.log(t2.s)
        console.log(t3.s)

        console.log(getCheck())
        console.log(getAdd())
        console.log(getScore())
    }