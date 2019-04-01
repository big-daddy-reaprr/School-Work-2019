function main()
    {
        var num1
        var num2
        var dif
        
        num1 = prompt('First Number')
        num2 = prompt('Second Number')

        parseInt(num1)
        parseInt(num2)

        document.write('<BR>')
        document.write('<H1 class="subtitle">Numbers Inputed</H1>')
        document.write('First Number: '+num1)
        document.write('<BR>')
        document.write('Second Number: '+num2)
        document.write('<BR>')

        if (num1 > num2)
            {
                dif = num1 - num2 
                parseInt(dif)
                
                document.write('First Number is bigger by'+dif)
            }
        
        else if (num1 == num2)
            {
                document.write('The First Number is equal to the second number')
            }

        else if (num1 < num2)
            {
                dif = num2 - num1
                parseInt(dif)

                document.write('Second Number is bigger by: '+dif)
            }

        else
            {
                document.write('ERROR')
            }
    }
