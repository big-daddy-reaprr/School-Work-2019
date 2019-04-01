function main()
    {
        var c;

        c = ('WORKING');


        function cell()
            {
                var r;

                alert('You wake in a strange room. It looks like a cell');
                alert('The door has been left open!');
                alert('Your head feels funny. Were you knocked on the head? Were you drugged?');
                alert('You leave the cell');
                alert('In the room there are two door.');

                r = prompt('You have a choice. L or R?');
                r = r.toLowerCase()
                console.log(r)

                if (r == 'l')
                    {
                        console.log(c)
                        alert('You fell through a trap door!');
                        death()
                    }
                
                else if (r == 'r')
                    {
                        console.log(c);
                        room()
                    }
                
                else
                    {
                        console.log(c);
                        alert('INVALID RESPONSE | RESTARTING');
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
                        console.log(c)
                        alert('Congrats! You may continue');
                        outside()
                    }
                
                else
                    {
                        alert('Nope! Thats wrong');
                        death()
                    }
            }
    
        function outside()
            {
                var q2
                var q3

                alert('You are outside now');
                alert('Beside you is a Gun and a Knife');

                q2 = prompt('What do you choose, G or K');
                q2 = w.toLowerCase();
                console.log(q2);

                if (q2 == 'g')
                    {
                        alert('You picked up the Gun');
                        alert('An enemy stands before you, do you shoot or throw the gun?');
                        
                        q3 = prompt('What do you do? S or T');
                        q3 = q3.toLowerCase();
                        console.log(q3);

                        if (q3 == 's')
                            {
                                console.log(c);
                                alert('The gun did not come with amunition. The monster engulfed you in one mouthful');
                                death()
                            }
                        
                        else if (q3 == 't')
                            {
                                console.log(c);
                                alert('You are an idiot if you threw the gun. You deserved to die');
                                death()
                            }
                        else
                            {
                                console.log(c);
                                alert('INVALID RESPONSE | RESTARTING');
                                outside()
                            }
                        
                    }
                
                else if (q2 == 'k')
                    {
                        alert('You picked up the Gun');
                        alert('An enemy stands before you, do you stab the monster or throw the Knife?');

                        q3 = prompt('What do you do, S or T');
                        q3 = q3.toLowerCase();
                        console.log(q3);

                        if (q3 == 's')
                            {
                                console.log(c);
                                alert('The monster is massive. What is a knife gonna do?');
                                death()
                            }
                        
                        else if (q3 == 't')
                            {
                                console.log(c);
                                alert('You hit the monster in the eye, rendering the monster useless. You won, Congrats');
                                close()
                            }
                        else
                            {
                                console.log(c);
                                alert('INVALID RESPONSE | RESTARTING');
                                outside()
                            }
                    }
                
                else
                    {
                        console.log(c);
                        alert('INVALID RESPONSE | RESTARTING');
                        outside()
                    }
                
            }
        
        function death()
            {
                var q4
                
                alert('YOU DIED')
                alert('Try again?')

                q4 = prompt('What do you say? Y or N?')
                q4 = q4.toLowerCase()
                console.log(q4)

                if (q4 == 'y')
                    {
                        console.log(c)
                        main()
                    }
                
                else if (q4 == 'n')
                    {
                        console.log(c)
                        close();
                    }
                
                else
                    {
                        console.log(c)
                        alert('INVALID RESPONSE | RESTARTING');
                        death()
                    }
            }
        
        function close()
            {
                close();
            }
        cell()
    }
