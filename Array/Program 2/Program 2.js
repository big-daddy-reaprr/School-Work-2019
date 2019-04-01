function main()
    {
        // Arrays
        var p
        var t1
        var t2

        //Array Num
        var x
        
        // For Loop
        var n

        // Num for for loop Arrays
        var t_calc
        
        x = 14

        t1 = new Array(x)
        t2 = new Array(x)
        p = new Array(x)

        p[0] = "Jasmine"
        p[1] = "Kimberly" 
        p[2] = "Susan"
        p[3] = "Margaret"
        p[4] = "Elizabeth"
        p[5] = "Wanda"
        p[6] = "Sandy"
        p[7] = "Kay"
        p[8] = "Zoe"
        p[9] = "Vanessa"
        p[10] = "Andrea"
        p[11] = "Anne" 
        p[12] = "Kate"
        p[13] = "Samantha"

        for (n=0; n<14; n=n+1)
            {
                t_calc = 0
                if (n %2 == 0)
                    {
                        t_calc = n/2
                        t1[t_calc] = p[n]
                    }

                else if (n %2 == 1)
                    {
                        t_calc = n/2
                        t_calc -= 0.5
                        t_calc = Math.floor(t_calc)

                        t2[t_calc] = p[n]
                    }

                else
                    {
                        console.log('ERROR')
                    }
            }
        
        document.write('<H1 class="subtitle2">Team A</H1>')
        
        for (n=0; n<7; n=n+1)
            {
                document.write(t1[n])
                document.write('<BR>')   
            }
        
        document.write('<HR>')
        document.write('<H1 class="subtitle2">Team B</H1>')

        for (n=0; n<7; n=n+1)
            {
                document.write(t2[n])
                document.write('<BR>')   
            }
    }