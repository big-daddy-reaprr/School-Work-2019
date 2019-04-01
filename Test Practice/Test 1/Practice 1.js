function main()
    {
        var l;
        var w;
        var a;
        var c;
        
        l = prompt('Length of room');
        w = prompt('Width of room');

        parseInt(l);
        parseInt(w);

        document.write('<CENTER><B>Dimentions</B></CENTER>');
        document.write('<CENTER>Length = '+l+'cm</CENTER>');
        document.write('<CENTER>Width = '+w+'cm</CENTER>');
        document.write('<BR')

        a = l * w
        parseInt(a)
        document.write('<B><CENTER>Area = '+a+'m^2</CENTER></B>')
        
        c = a * 2
        parseInt(c)
        document.write('<B><CENTER>Carper Cost = $'+c+'</B></CENTER>')
    }