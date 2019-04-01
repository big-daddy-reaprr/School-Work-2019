function main()
    {
        var n1
        var n2
        var original_n2
        var times

        n1 = prompt('What Times Table would you like to see?')
        n2 = prompt('How many times?')
        
        document.write('<H1 class="subtitle2">'+n1+' Times Table <H1>')
        
        original_n2 = n2
        n2 = 0

        while (n2 <= original_n2)
            {
                times = n2 * n1
                document.write(n2+' x '+n1+' = '+times)
                document.write('<BR>')

                n2 = n2 + 1
            }
    }