function main() 
    {
        var cc;
        var km;
        var cost;

        cc = prompt('What is the CC of the car?',2000);
        km = prompt('How far has the Car travelled?', 20);

        parseInt(cc);
        parseInt(km);

        document.write('<CENTER>Engine Capcity = '+cc+'cc</CENTER>');
        document.write('<CENTER>KM travelled = '+km+'km</CENTER>');
        document.write('<BR>');

        document.write('<CENTER><B>Rates</B><CENTER>');
        document.write('<CENTER>Under 2000cc = 30 cent per km</CENTER>');
        document.write('<CENTER>Over 2000 cc = 35 cent per km</CENTER>');
        document.write('<BR>')

        if (cc <= 2000)
            {
                cost = 0.30 * km;
                parseInt(cost);
                
                document.write('<B><CENTER>Total Cost = $'+cost+'</B></CENTER>');
                document.write('<BR>');
            }

        else if (cc > 2000)
            {
                cost = 0.35 * km;
                parseInt(cost);

                document.write('<B><CENTER>Total Cost = $'+cost+'</B></CENTER>');
                document.write('<BR>');
            }

    }