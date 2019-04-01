function main()
    {
        var bmi
        var h
        var w
        
        h = prompt('Height (in m)')
        w = prompt('Weight (in kg)')

        h = h * h

        bmi = (w/h).toFixed(1)

        document.write("Your bmi is "+bmi)
        document.write('<BR>')

        if (bmi < 18.5)
            {
                document.write('You are underweight')
            }

        else if ((bmi >= 18.5) && (bmi <= 24.9))
            {
                document.write('You are healthy')
            }

        else if ((bmi > 24.9) && (bmi <= 29.9))
            {
                document.write('You are overweight')
            }

        else if (bmi > 29.9)
            {
                document.write('You are obese')
            }
        
    }