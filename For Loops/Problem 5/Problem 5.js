var mps
var m
var new_m
var not
var success
var check

var s_1 = 0
var s_2 = 0
var s_3 = 0
var s_4 = 0

var s_1_upg = 1
var s_2_upg = 1
var s_3_upg = 1
var s_4_upg = 1

mps = 0
m = 0
not = 'UNSUCCESSFUL TRANSACTION'
success = 'SUCCESSFUL TRANSACTION'

check = new Array(5)

check[0] = 0
check[1] = 0
check[2] = 0
check[3] = 0
check[4] = 0

function money()
    {
        m = parseInt(mps) + parseInt(m)
        console.log(m)
        document.getElementById("mps").innerHTML = mps
        document.getElementById("money").innerHTML = '$' + m
        main()
    }

function main()
    {
        setTimeout("money()", 1000)
    }

function d(i)
    {
        var g

        if (i == 1)
            {
                g = document.getElementById("sell")
                document.getElementById('status1').innerHTML = ""
            }
        
        else if (i == 2)
            {
                g = document.getElementById("shop")
                document.getElementById('status2').innerHTML = ""
            }

        else if (i == 3)
            {
                g = document.getElementById("upg")
                document.getElementById('status3').innerHTML = ""
            }

        else if (i == 4)
            {
                g = document.getElementById("int")
            }



        if (g.style.display === "block")
            {
                g.style.display = "none"
            }

        else
            {
                g.style.display = "block"
            }
    }

function shop(n)
    {
        document.getElementById('status2').innerHTML = ""
        if (n == 1)
            {
                if (m >= 100)
                    {
                        m = m - 100
                        s_1 = s_1 + 1
                        mps = mps_calc()

                        document.getElementById("money").innerHTML = '$' + m
                        document.getElementById('mps').innerHTML = mps
                        document.getElementById('status2').innerHTML = success
                    }

                else
                    {
                        document.getElementById('status2').innerHTML = not
                    }
            }

        else if (n == 2)
            {
                if (m >= 500)
                    {
                        m = m - 500
                        s_2 = s_2 + 1
                        mps = mps_calc()

                        document.getElementById("money").innerHTML = '$' + m
                        document.getElementById('mps').innerHTML = mps
                        document.getElementById('status2').innerHTML = success
                    }

                else
                    {
                        document.getElementById('status2').innerHTML = not
                    }
            }

        else if (n == 3)
            {
                if (m >= 1000)
                    {
                        m = m - 1000
                        s_3 = s_3 + 1
                        mps = mps_calc()

                        document.getElementById("money").innerHTML = '$' + m
                        document.getElementById('mps').innerHTML = mps
                        document.getElementById('status2').innerHTML = success
                    }

                else
                    {
                        document.getElementById('status2').innerHTML = not
                    }
            }

        else if (n == 4)
            {
                if (m >= 1000000)
                    {
                        m = m - 1000000
                        s_4 = s_4 + 1
                        mps = mps_calc()
                        
                        document.getElementById("money").innerHTML = '$' + m
                        document.getElementById('mps').innerHTML = mps
                        document.getElementById('status2').innerHTML = success
                    }

                else
                    {
                        document.getElementById('status2').innerHTML = not
                    }
            }
    }

function sell(x)
    {
        document.getElementById('status1').innerHTML = "" 
        if (x == 1)
            {
                check[0] = check[0] + 1
                m = m + 2
                document.getElementById("money").innerHTML = '$' + m
                document.getElementById('status1').innerHTML = success
            }

        else if (x == 2)
            {
                if (check[0] < 25)
                    {
                        document.getElementById('status1').innerHTML = not
                    }
                
                else if (check[0] >= 25)
                    {
                        check[1] = check[1] + 1
                        m = m + 10
                        document.getElementById("money").innerHTML = '$' + m
                        document.getElementById('status1').innerHTML = success
                    }
            }
        
        else if (x == 3)
            {
                if (check[1] < 25)
                    {
                        document.getElementById('status1').innerHTML = not
                    }
                
                else if (check[1] >= 25)
                    {
                        check[2] = check[2] + 1
                        m = m + 25
                        document.getElementById("money").innerHTML = '$' + m
                        document.getElementById('status1').innerHTML = success
                    }
            }

        else if (x == 4)
            {
                if (check[2] < 25)
                    {
                        document.getElementById('status1').innerHTML = not
                    }
                
                else if (check[2] >= 25)
                    {
                        check[3] = check[3] + 1
                        m = m + 60
                        document.getElementById("money").innerHTML = '$' + m
                        document.getElementById('status1').innerHTML = success
                    }
            }

        else if (x == 5)
            {
                if (check[3] < 25)
                    {
                        document.getElementById('status1').innerHTML = not
                    }
                
                else if (check[3] >= 25)
                    {
                        check[4] = check[4] + 1
                        m = m + 125
                        document.getElementById("money").innerHTML = '$' + m
                        document.getElementById('status1').innerHTML = success
                    }
            }

        else if (x == 6)
            {
                if (check[4] < 25)
                    {
                        document.getElementById('status1').innerHTML = not
                    }
                
                else if (check[4] >= 25)
                    {
                        m = m + 250
                        document.getElementById("money").innerHTML = '$' + m
                        document.getElementById('status1').innerHTML = success
                    }
            }
    }

function upg(y)
    {
        var name
        var price

        document.getElementById("status3").innerHTML = ""
        if (y == 1)
            {
                if (chk(1) == 1)
                    {
                        if (m >= cost(1))
                            {
                                m = m - cost(1)
                                name = s_1_upg + 1
                                s_1_upg = s_1_upg + 1
                                mps = mps_calc()
                                price = cost(1)

                                document.getElementById("money").innerHTML = '$' + m
                                document.getElementById('mps').innerHTML = mps
                                document.getElementById('status3').innerHTML = success
                                document.getElementById("nb_1").innerHTML = name
                                document.getElementById("nb_1_c").innerHTML = price
                            }

                        else if (m < cost(1))
                            {
                                document.getElementById("status3").innerHTML = not
                            }
                    }

                else if (chk(1) == 0)
                    {
                        document.getElementById("status3").innerHTML = not
                    }
            }

        else if (y == 2)
            {
                if (chk(2) == 1)
                    {
                        if (m >= cost(2))
                            {
                                m = m - cost(2)
                                name = s_2_upg + 1
                                s_2_upg = s_2_upg + 1
                                mps = mps_calc()
                                price = cost(2)

                                document.getElementById("money").innerHTML = '$' + m
                                document.getElementById('mps').innerHTML = mps
                                document.getElementById('status3').innerHTML = success
                                document.getElementById("nb_2").innerHTML = name
                                document.getElementById("nb_2_c").innerHTML = price
                            }

                        else if (m < cost(2))
                            {
                                document.getElementById("status3").innerHTML = not
                            }
                    }

                else if (chk(2) == 0)
                    {
                        document.getElementById("status3").innerHTML = not
                    }
            }

        else if (y == 3)
            {
                if (chk(3) == 1)
                    {
                        if (m >= cost(3))
                            {
                                m = m - cost(3)
                                name = s_3_upg + 1
                                s_3_upg = s_3_upg + 1
                                mps = mps_calc()
                                price = cost(3)

                                document.getElementById("money").innerHTML = '$' + m
                                document.getElementById('mps').innerHTML = mps
                                document.getElementById('status3').innerHTML = success
                                document.getElementById("nb_3").innerHTML = name
                                document.getElementById("nb_3_c").innerHTML = price
                            }

                        else if (m < cost(3))
                            {
                                document.getElementById("status3").innerHTML = not
                            }
                    }

                else if (chk(2) == 0)
                    {
                        document.getElementById("status3").innerHTML = not
                    }
            }

        else if (y == 4)
            {
                if (chk(4) == 1)
                    {
                        if (m >= cost(4))
                            {
                                m = m - cost(4)
                                name = s_4_upg + 1
                                s_4_upg = s_4_upg + 1
                                mps = mps_calc()
                                price = cost(4)

                                document.getElementById("money").innerHTML = '$' + m
                                document.getElementById('mps').innerHTML = mps
                                document.getElementById('status3').innerHTML = success
                                document.getElementById("nb_4").innerHTML = name
                                document.getElementById("nb_4_c").innerHTML = price
                            }

                        else if (m < cost(4))
                            {
                                document.getElementById("status3").innerHTML = not
                            }
                    }

                else if (chk(4) == 0)
                    {
                        document.getElementById("status3").innerHTML = not
                    }
            }
    }

function chk(h)
    {
        if (h == 1)
            {
                if (s_1 > 0)
                    {
                        return(1)
                    }

                else if (s_1 <= 0)
                    {
                        return(0)
                    }
            }

        else if (h == 2)
            {
                if (s_2 > 0)
                    {
                        return(1)
                    }

                else if (s_2 <= 0)
                    {
                        return(0)
                    }
            }

        else if (h == 3)
            {
                if (s_3 > 0)
                    {
                        return(1)
                    }

                else if (s_3 <= 0)
                    {
                        return(0)
                    }
            }

        else if (h == 4)
            {
                if (s_4 > 0)
                    {
                        return(1)
                    }

                else if (s_4 <= 0)
                    {
                        return(0)
                    }
            }
    }

function mps_calc()
    {
        var c

        c = parseInt(mps) + (parseInt(s_1) * parseInt(s_1_upg)) + (parseInt(s_2) * parseInt(s_2_upg)) + (parseInt(s_3) * parseInt(s_3_upg)) + (parseInt(s_4)  * parseInt(s_4_upg))

        return(c)
    }

function cost(d)
    {
        var dcost

        if (d == 1)
            {
                dcost = s_1_upg * 1000
                return(dcost)
            }

        else if (d == 2)
            {
                dcost = s_2_upg * 5000
                return(dcost)
            }

        else if (d == 3)
            {
                dcost = s_3_upg * 10000
                return(dcost)
            }

        else if (d == 4)
            {
                dcost = s_4_upg * 1000000
                return(dcost)
            }
    }