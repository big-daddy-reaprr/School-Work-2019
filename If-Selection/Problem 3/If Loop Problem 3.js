function main()
    {
        var ct;
        
        function currentTime()
            {
                var tday;
                var ch;
                var cm;

                tday = new Date();
                ch = tday.getHours();
                cm = tday.getMinutes();
               
                console.log(ch)
                console.log(cm)
                console.log('Current Time : GOT');
                
                if (ch >= 13)
                    {
                        ch = ch - 12;
                    }
            
                ct = (ch+':'+cm)
                
                console.log('Current Time : PARSED');
                console.log(ct);

                time();
            }


        function time()
            {
                var time;
                var dt;
                var ampm;
                
                time = prompt('What time would you like to convert?', ct);
                time = time.replace(':','');
                parseInt(time);
                console.log('Time : GOT')
                
                ampm = prompt('AM/PM?');
                ampm = ampm.toLowerCase();
                console.log('AMPM: GOT')

                if (ampm == ('am'))
                    {
                        dt = ('0000'+time).slice(-4);
                        document.write('<H1><CENTER>'+dt+' HRS<CENTER></H1>');
                        console.log('AM TIME')
                    }

                else if (ampm == ('pm'))
                    {
                        dt = ('0000'+time).slice(-4);
                        dt = parseInt(1200) + parseInt(dt);
                        document.write('<H1><CENTER>'+dt+' HRS<CENTER></H1>');
                        console.log('PM TIME')
                    }
                else
                    {
                        console.log('ERROR RESTART')
                        alert('WRONG AMPM: PROGRAM RESTARTING')
                        main();
                    }
                }
        currentTime();
    }
