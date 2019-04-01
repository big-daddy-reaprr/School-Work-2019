function main()
    {
        // Saves me from writing 'WORKING' all the time
        var c
        
        // Level Count
        var lc
        
        // Weapon: 0(Nothing) 1(Sword) 2(Gun) 3(1 + 2)
        var w
        
        c = ('WORKING')

        alert('BEFORE YOU PLAY. This game involves RNG, so it may take multiple plays to win. Good Luck!')

        // Room 1
        function r1()
            {
                var q1
                
                console.log(c)
                
                lc = 1
                parseInt(lc)
                console.log(lc)

                alert('You woke up in a dungeon')
                alert('There is a bow and a sword next to you')
                q1 = prompt('Which do you choose? S or B or N (neither)')

                q1 = q1.toLowerCase()
                
                if (q1 == 's')
                    {
                        w = 1
                        r2()
                    }
                
                else if (q1 == 'b')
                    {
                        w = 2
                        r2()
                    }

                else if (q1 == 'n')
                    {
                        w = 0
                        r2()
                    }

                else
                    {
                        invalid()
                    }
            }

        // Room 2
        function r2()
            {
                var q2
                var q3
                var rand1

                console.log(c)
                
                lc = 2
                parseInt(lc)
                console.log(lc)

                // RNG element
                rand1 = 0
                rand1 = (Math.floor(Math.random() * 100))
                parseInt(rand1)
                console.log(c)
                console.log(rand1)
                
                alert('You proceed to the next room')
                alert('A sticky substance has caught your grip')

                if (w == 1)
                    {
                        alert('You have a sword, you can cut your way out, or do you try and move out of the slime?')

                        q2 = prompt('What do you do? C or M')
                        q2 = q2.toLowerCase()

                        if (q2 == 'c')
                            {
                                if (rand1 >= 50)
                                    {
                                        console.log(c)
                                        alert('While cutting the slime, you injured your ankle, thus making you unable to move')
                                        death()
                                    }
                                
                                else if (rand1 < 50)
                                    {
                                        console.log(c)
                                        alert('You sucessfully cut the sticky subsatnce off, and ran too the next door')
                                        
                                        r3()
                                    }
                                
                                else
                                    {
                                        alert('This should not exist.')
                                        alert('IF THIS IS AQUIF, FIX IT YOU FUCKING IDIOT')
                                        alert('if not then then go see Aquif cuz he is a fucking idiot')
                                        alert('press f12 and go to console')
                                    }
                            }
                        else if (q2 == 'm')
                            {
                                alert('Even though you have taken ages, you got out of the slime. You realise that you have lost something')
                                alert('You lost your knife, you now have no weapon')

                                w = 0

                                alert('You depressively move forward to the next room')
                                r3()
                            }
                        
                        else
                            {
                                invalid()
                            }
                        
                    }
                
                else
                    {
                        console.log(c)
                        alert('You dont have a knife, so you cant cut yourself out of it')
                        alert('Do you try and move out of it, or do you stay put?')

                        q3 = prompt('What do you do? M or P')
                        q3 = q3.toLowerCase()

                        if (q3 == 'p')
                            {
                                alert('The slime slowly eats you alive as you stay put. How did you ever think that this would work?')
                                death()
                            }
                        
                        else if (q3 == 'm')
                            {
                                if (rand1 >= 50)
                                    {
                                        console.log(c)
                                        alert('Moving only made the death quicker. Maybe it was bad luck that you died.')
                                        death()
                                    }
                                
                                else if (rand1 < 50)
                                    {
                                        console.log(c)
                                        alert('You sucessfully got out of the slime')
                                        alert('You were lucky. You move to the next room')
                                        r3()
                                    }
                            }
                    }
            }
        
        // Mini-Boss
        function r3()
            {
                var q4
                var rand2

                lc = 3

                rand2 = 0
                rand2 = (Math.floor(Math.random() * 100))
                parseInt(rand2)
                console.log(c)
                console.log(rand2)

                alert('You approach a massive boss-looking enemy')
                
                if (w == 1)
                    {
                        alert('You have a knife. Do you wish to stab it, or try and run from it')
                        
                        q4 = prompt('What do you do? S or R')
                        q4 - q4.toLowerCase()
                        console.log(q4)

                        if (q4 == 's')
                            {
                                if (rand2 >= 25)
                                    {
                                        console.log(c)
                                        alert('Unlucky, you were caught when trying to fight the boss.')
                                        death()
                                    }
                                
                                else if (rand2 < 25)
                                    {
                                        console.log(c)
                                        alert('You were able to hit its weak spot, and somehow killed the moster in one shot. Very lucky')
                                        r4()
                                    }
                            }
                        
                        else if (q4 == 'r')
                            {
                                if (rand2 >= 1)
                                    {
                                        console.log(c)

                                        alert('Why did you think this would work. You got squashed. Nice')
                                        death()
                                    }
                                
                                else if (rand2 < 1)
                                    {
                                        console.log(c)
                                        
                                        alert('Somehow your stupidity and your luck combined allowed you to live. You proceeded ot the next door')
                                        alert('Also I would reccomend you buy a lottery ticket. This was a 1 in 100 chance')
                                        
                                        r4()
                                    }
                                
                                else
                                    {
                                        alert('This should not exist. Aquif fix this')
                                        alert('f12 console')
                                    }
                            }
                        
                        else
                            {
                                console.log(c)
                                invalid()
                            }
                    }
                
                else if (w == 2)
                    {
                        console.log(c)
                        alert('You have a gun')
                        alert('You could shoot the boss, throw the gun, or run')
                        
                        q4 = prompt('What do you do? S, T or R')
                        q4 = q4.toLowerCase()

                        if (q4 == 's')
                            {
                                if (rand2 >= 75)
                                    {
                                        alert('Unlucky, the gun had no bullets in. The boss was wuick with it.')
                                        death()
                                    }
                                
                                else if (rand2 < 75)
                                    {
                                        alert('You hit the boss in its weak spot, thus rendering it useless. You run to the next door')
                                        r4()
                                    }

                                else
                                    {
                                        alert('This should not exist. What the fuck. Aquif, press f12 and fix this shit')
                                    }
                            }

                        else if (q4 == 't')
                            {
                                alert('Jesus you need help. Natural selection took effect and killed you.')
                                death()
                            }
                        
                        else if (q4 == 'r')
                            {
                                if (rand2 >= 1)
                                    {
                                        console.log(c)

                                        alert('Why did you think this would work. You got squashed. Nice')
                                        death()
                                    }
                                
                                else if (rand2 < 1)
                                    {
                                        console.log(c)
                                        
                                        alert('Somehow your stupidity and your luck combined allowed you to live. You proceeded ot the next door')
                                        alert('Also I would reccomend you buy a lottery ticket. This was a 1 in 100 chance')
                                        
                                        r4()
                                    }
                            }
                        
                        else
                            {
                                invalid()
                            }
                    }
                
                else if (w == 0)
                    {
                        console.log(c)

                        alert('All you can do is run')
                        
                        if (rand2 >= 1)
                            {
                                console.log(c)

                                alert('Why did you think this would work. You got squashed. Nice')
                                death()
                            }
                        
                        else if (rand2 < 1)
                            {
                                console.log(c)
                                
                                alert('Somehow your stupidity and your luck combined allowed you to live. You proceeded ot the next door')
                                alert('Also I would reccomend you buy a lottery ticket. This was a 1 in 100 chance')
                                
                                r4()
                            }
                        
                        else
                            {
                                alert('This should not exist. Aquif fix this')
                                alert('f12 console')
                            }
                        
                    }
                
                else
                    {
                        alert('This should not exist. Aquif fix this')
                        alert('f12 console')
                    }
            }

        // Room 3
        function r4()
            {
                var rand3
                var q5
                var q6

                lc = 4

                console.log(c)

                rand3 = 0
                rand3 = (Math.floor(Math.random() * 100))
                parseInt(rand3)
                console.log(c)
                console.log(rand3)

                alert('You have defeated the mini-boss, and now you deserve your loot.')
                alert('There is a chest in front of you, do you open it, or avoid it?')

                q5 = prompt('What do you do? O or A')
                q5 = q5.toLowerCase()
                
                if (q5 == 'o')
                    {
                        if (rand3 >= 75)
                            {
                                alert('The chest was a mimic and it ate you alive. Bad Luck')
                                death()
                            }
                        
                        else if (rand3 < 75)
                            {
                                if (w == 0)
                                    {
                                        if (rand3 >= 50)
                                            {
                                                alert('You found a Sword in the chest. Do you wish to keep it?')

                                                q6 = prompt('What do you do? Y or N')
                                                q6 = q6.toLowerCase()

                                                if (q6 == 'y')
                                                    {
                                                        w = 1
                                                        alert('You now have a sword. You contine to the next room')
                                                        r5()
                                                    }
                                                
                                                else if (q6 == 'n')
                                                    {
                                                        alert('You choose to leave it. Interesting. You continue to the next room')
                                                        r5()
                                                    }
                                            }
                                        
                                        else if (rand3 < 50)
                                            {
                                                alert('You found a gun in the chest. Do you wish to keep it?')

                                                q6 = prompt('What do you do? Y or N')
                                                q6 = q5.toLowerCase()

                                                if (q6 == 'y')
                                                    {
                                                        w = 2 

                                                        alert('You now have a gun. You continue to the next room')
                                                        r5()
                                                    }

                                                else if (q6 == 'n')
                                                    {
                                                        alert('You chose not to pick the weapon up. Interesting')
                                                        alert('You continue to the next room')
                                                        r5()
                                                    }
                                            }

                                        else
                                            {
                                                alert('This should not  exist, Aquif fix this')
                                            }
                                    }
                                
                                else if (w == 1)
                                    {
                                        alert('You already have a sword. There is a gun in the chest, do you wish to take it?')

                                        q6 = prompt('What do you do? Y or N')
                                        q6 = q6.toLowerCase()

                                        if (q6 == 'y')
                                            {
                                                w = 3
                                                alert('You now have both weapons. Congrats')
                                                alert('You continue to the next room')
                                                r5()
                                            }
                                        
                                        else if (q6 == 'n')
                                            {
                                                alert('You chose to leave the gun, Interesting')
                                                alert('You continue to the next room')
                                                r5()
                                            }
                                        
                                        else
                                            {
                                                invalid()
                                            }
                                    }

                                else if (w == 2)
                                    {
                                        alert('You already have a gun. There is a sword in the chest, do you wish to take it?')

                                        q6 = prompt('What do you do? Y or N')
                                        q6 = q6.toLowerCase()

                                        if (q6 == 'y')
                                            {
                                                w = 3
                                                alert('You now have both weapons. Congrats')
                                                alert('You continue to the next room')
                                                r5()
                                            }
                                        
                                        else if (q6 == 'n')
                                            {
                                                alert('You chose to leave the gun, Interesting')
                                                alert('You continue to the next room')
                                                r5()
                                            }
                                        
                                        else
                                            {
                                                invalid()
                                            }
                                    }

                                else
                                    {
                                        alert('This shoud not exist. Fix this aquif')
                                    }
                            }
                        
                        else
                            {
                                alert('This is broken, aquif fix it')
                            }
                    }

                else if (q5 == 'a')
                    {

                    }

                else
                    {
                        invalid()
                    }

            }

        // Room 5
        function r5()
            {
                var rand4

                lc = 5

                console.log(c)

                rand4 = 0
                rand4 = (Math.floor(Math.random() * 100))
                parseInt(rand4)
                console.log(c)
                console.log(rand4)

                alert('You walk into a new room. it seems empty')
                alert('You walk precautiously')

                if (rand4 >= 50)
                    {
                        alert('You set off a trap.')
                        
                        if (rand4 >= 50)
                            {
                                alert('You got squashed by a boulder. Bad Luck')
                                death()
                            }

                        else if (rand4 < 50)
                            {
                                alert('You luckily espaced and went to the next room')
                                r6()
                            }

                        else
                            {
                                alert('This shouldnt exist, aquif fix this')
                            }
                    }
                
                else if (rand4 < 50)
                    {
                        alert('You safely made it to the next room. You wonder if anything bad could have happened')
                        alert('You proceed to the next room')
                        r6()
                    }

            }

        // Final Boss
        function r6()
            {
                lc = 6 

                console.log(c)

                alert('TO BE CONTINUED')
                alert('Nice job reaching this far')
                close()
            }

        // Invalid Response
        function invalid()
            {
                console.log(c)
                alert('INVALID RESPONSE | TRY AGAIN')

                if (lc == 0)
                    {
                        death()
                    }
                
                else if (lc == 1)
                    {
                        r1()
                    }
                
                else if (lc == 2)
                    {
                        r2()
                    }
                
                else if (lc == 3)
                    {
                        r3()
                    }
                
                else if (lc == 4)
                    {
                        r4()
                    }
                
                else if (lc == 5)
                    {
                        r5()
                    }

                else if (lc == 6)
                    {
                        r6()
                    }
            }

        // Death Scene
        function death()
            {
                var answer

                console.log(c)

                alert('YOU HAVE DIED')
                answer = prompt('Try again, or quit (T or Q)')

                answer = answer.toLowerCase()
                console.log(answer)
                
                if (answer == 't')
                    {
                        if (lc == 1)
                            {
                                r1()
                            }
                        
                        else if (lc == 2)
                            {
                                r2()    
                            }

                        else if (lc == 3)
                            {
                                r3()
                            }
                        
                        else if (lc == 4)
                            {
                                r4()
                            }
                        
                        else if (lc == 5)
                            {
                                r5()
                            }
                        
                        else if (lc == 6)
                            {
                                r6()
                            }
                    }
                
                else if (answer == 'q')
                    {
                        close()
                    }

                else
                    {
                        invalid()
                    }
            }
        
        r1()
    }