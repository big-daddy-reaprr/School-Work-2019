function main() 
    {
        var customer;
        var taxb;
        var purchase;
        var tax;

        customer = prompt('Name of Customer');
        taxb = prompt('Which tax Code? (0-3)', 0);
        purchase =  prompt('How much goods purchased?', 2000);

        parseInt(taxb);
        parseInt(purchase);

        document.write('<CENTER><B>Tax Brackets</B><CENTER>');
        document.write('<CENTER>0 | Tax Exempt | 0%</CENTER>');
        document.write('<CENTER>1 | State Sales Tax | 3%</CENTER>');
        document.write('<CENTER>2 | Federal Sales Tax | 5%</CENTER>');
        document.write('<CENTER>3 | Special Sales Tax | 7%</CENTER>');
        document.write('<BR>');

        document.write('<CENTER><B>Information</B></CENTER>')
        document.write('<CENTER>Name: '+customer+'</CENTER>');
        document.write('<CENTER>Tax Bracket = '+taxb+'</CENTER>');
        document.write('<CENTER>Purchased Amount = $'+purchase+'</CENTER>')
        document.write('<BR>');

        if (taxb == 0)
        {
            tax = 0
            parseInt(tax);
            document.write('<CENTER><B> Tax Required to pay = $'+tax+'</CENTER></B>');
        }

        else if (taxb == 1)
        {
            tax = purchase*(3/100);
            parseInt(tax);
            document.write('<CENTER><B> Tax Required to pay = $'+tax+'</CENTER></B>');
        }

        else if (taxb == 2)
        {
            tax = purchase*(5/100);
            parseInt(tax);
            document.write('<CENTER><B> Tax Required to pay = $'+tax+'</CENTER></B>');
        }

        else if (taxb == 3)
        {
            tax = purchase*(7/100);
            parseInt(tax);
            document.write('<CENTER><B> Tax Required to pay = $'+tax+'</CENTER></B>');
        }
        
        else
        {
            window.alert('ERROR: WRONG TAX BRACKET | PROGRAM RESTARTING')
            main();
        }
    
    }