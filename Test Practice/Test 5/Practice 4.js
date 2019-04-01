function main()
    {
        var p
        var d
        var dper
        var dp

        p = prompt('Price of Item')
        d = prompt('Discount')

        dper = p * (d/100)
        dp = p - dper

        document.write(dp)
    }