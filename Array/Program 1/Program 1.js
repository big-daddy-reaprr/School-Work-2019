function main()
    {
        var student
        var mark
        
        var n

        var x
        
        x = 10

        student = new Array(x)
        mark = new Array(x)

        student[0] = "Sue"
        mark[0] = 14

        student[1] = "Mary"
        mark[1] = 13

        student[2] = "Adrian"
        mark[2] = 16

        student[3] = "Sarah"
        mark[3] = 18

        student[4] = "Peter"
        mark[4] = 12

        student[5] = "Tony"
        mark[5] = 11

        student[6] = "Va"
        mark[6] = 19

        student[7] = "Christie"
        mark [7] = 14

        student[8] = "Andrew"
        mark[8] = 17

        student[9] = "Anurada"
        mark[9] = 15

        for (n=0; n<10; n=n+1)
            {
                document.write(student[n]+"  |   "+mark[n])
                document.write("<BR>")
            }
    }