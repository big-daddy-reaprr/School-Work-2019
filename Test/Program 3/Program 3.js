function main()
    {
        var num1;
        var num2;
        var m;
        var dif;
        var div;


        num1 = prompt('First Number');
        num2 = prompt('Second Number');

        parseInt(num1);
        parseInt(num2);

        m = num1 * num2;
        dif = num1 - num2;
        div = num1/num2;

        parseInt(m);
        parseInt(div);
        parseInt(dif);

        document.write('<H1><CENTER>Inputed Numbers</CENTER></H1>');
        document.write('<CENTER>Num 1: '+num1+'</CENTER>');
        document.write('<CENTER>Num 2: '+num2+'</CENTER>');

        document.write('<BR>');

        document.write('<H1><CENTER>Calculations</CENTER></H1>');
        document.write('<CENTER>Product: '+m+'</CENTER>');
        document.write('<CENTER>Difference: '+dif+'</CENTER>');
        document.write('<CENTER>Division: '+div+'</CENTER>');
    }