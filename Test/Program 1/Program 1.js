function main()
    {
        var num1;
        var num2;
        var num3;
        var num4;
        var num5;
        var a;

        num1 = prompt('First Number');
        num2 = prompt('Second Number');
        num3 = prompt('Third Number');
        num4 = prompt('Fourth Number');
        num5 = prompt('Fifth Number');

        a = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5))/5;

        document.write('<CENTER><B>Numbers</CENTER></B>');
        document.write('<CENTER>Num 1: '+num1+'</CENTER>');
        document.write('<CENTER>Num 2: '+num2+'</CENTER>');
        document.write('<CENTER>Num 3: '+num3+'</CENTER>');
        document.write('<CENTER>Num 4: '+num4+'</CENTER>');
        document.write('<CENTER>Num 5: '+num5+'</CENTER>');
        
        document.write('<CENTER><H1>Average: '+a+'</H1></CENTER>');
    }