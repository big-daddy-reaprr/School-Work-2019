function main()
    {
        function cell()
            {
                var r;

                alert('You wake in a strange room. It looks like a cell');
                alert('The door has been left open!');
                alert('Your head feels funny. Were you knocked on the head? Were you drugged?');
                alert('You leave the cell');
                alert('In the room there are two door.');

                r = prompt('You have a choice. L or R?');
                console.log(r)
                r = r.toLowerCase()
                console.log(r)

                if (r == 'l')
                    {
                        alert('You will fall though a trap door to your death!');
                        console.log('WORKING')
                    }
                
                else if (r == 'r')
                    {
                        console.log('WORKING')
                        room()
                    }
                
                else
                    {
                        console.log('WORKING')
                        alert('INVALID RESPONSE | RESTARTING')
                        cell()
                    }
            }
        
        function room()
            {
                var q1;

                alert('You come across another empty room');
                alert('You see a piece of paper in the middle of the room, on the which there is a question');
                alert('If you answer the question correctly you will enter the next door');
                alert('If not, you are stuck in this room and you die');
                
                q1 = prompt('How many toes does an ostrich have on one foot');

                if (q1 == 2)
                    {
                        alert('Congrats! You may continue')
                    }
                
                else
                    {
                        alert('You died')
                    }
            }
    cell()
    }
