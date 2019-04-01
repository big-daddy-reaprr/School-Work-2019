var num = []
var op

function main()
    {
        var ans

        num[0] = document.getElementById("n1").value
        num[1] = document.getElementById("n2").value
        num[2] = document.getElementById("n3").value
        num[3] = document.getElementById("n4").value
        num[4] = document.getElementById("n5").value

        op = document.getElementById("fx").value

        if (op == "+")
            {
                ans = calc(1)
            }

        else if (op == "-")
            {
                ans = calc(2)
            }

        else if (op == "*")
            {
                ans = calc(3)
            }

        else if (op == "/")
            {
                ans = calc(4)
            }

        document.getElementById('answer').innerHTML = "Calculation: " + ans
    }

function calc(x)
    {
        var c
        
        if (x == 1)
            {
                c = parseInt(num[0]) + parseInt(num[1]) + parseInt(num[2]) + parseInt(num[3]) + parseInt(num[4])
            }

        else if (x == 2)
            {
                c = num[0] - num[1] - num[2] - num[3] - num[4]
            }

        else if (x == 3)
            {
                c = num[0] * num[1] * num[2] * num[3] * num[4]
            }

        else if (x == 4)
            {
                c = num[0] / num[1] / num[2] / num[3] / num[4]
            }

        return(c)
    }