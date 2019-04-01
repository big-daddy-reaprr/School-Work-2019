function main()
    {
        var fn;
        var sn;
        var age;
        var m;
        var favn;
        
        var ln;
        var y;

        fn = prompt('First Name');
        sn = prompt('Last Name');
        age = prompt('Age (Turning this year)');
        m = prompt('Month Born In (Number)');
        favn = prompt('Favourite Number');

        parseInt(age);
        parseInt(favn);
        parseInt(y);

        y = 2019 - age;
        ln = (favn * 4) - m;

        document.write('<B><CENTER>BIG BROTHER CONTESTANT PROFILE</CENTER></B>');
        document.write('<CENTER><B>'+fn+' '+sn+' </B>was born in <B>'+y+'</B>,</CENTER>');
        document.write('<CENTER>and their lucky number is <B>'+ln+'</B></CENTER>');

    }