function main()
    {
        // Arrays
        var t1
        var t2

        //Array Num
        var x
        
        // For Loop
        var n
        
        x = 14

        t1 = []
        t2 = []
        p = []

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

        p.sort(function(a, b)
            {
                return b.length - a.length
            })
        
        document.write('<H1 class="subtitle2">Team A</H1>')
        
        for (n=6; n<13; n=n+1)
            {
                t1[n] = p[n]
                document.write(t1[n])
                document.write('<BR>')   
            }
        
        document.write('<HR>')
        document.write('<H1 class="subtitle2">Team B</H1>')

        for (n=0; n<6; n=n+1)
            {
                t2[n] = p[n]
                document.write(t2[n])
                document.write('<BR>')   
            }
    }
