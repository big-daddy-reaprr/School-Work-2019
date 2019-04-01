function main()
    {
        var m
        var cm

        m = prompt('Meters')
        parseInt(m)

        cm = m * 100
        parseInt(cm)
        document.write('<CENTER><B>Meteres: '+m+' m</CENTER></B>')
        document.write('<BR>')
        document.write('<CENTER><B>Centimetere: '+cm+' cm</CENTER></B>')
    }