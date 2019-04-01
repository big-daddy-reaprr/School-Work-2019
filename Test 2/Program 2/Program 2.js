function main()
    {
        var num1
        var num2
        var ans
        var res

        num1 = prompt('First Number')
        num2 = prompt('Second Number')

        ans = prompt('+, -, * or /')

        if (ans == '+')
            {
                res = parseInt(num1) + parseInt(num2)
                document.write('Answer: '+res)
            }

        else if (ans == "-")
            {
                res = num1 - num2
                document.write('Answer: '+res)
            }

        else if (ans == "*")
            {
                res = num1 * num2 
                document.write('Answer: '+res)
            }

        else if (ans == "/")
            {
                res = num1 / num2
                document.write('Answer: '+res)
            }

        else
            {
                alert('INNCORECT FUNCTION. RESTARTING PROGRAM')
                num1 = 0
                num2 = 0
                ans = 0
                main()
            }
    }