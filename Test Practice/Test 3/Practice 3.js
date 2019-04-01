function main()
    {
        var bmi
        var h
        var w

        h = prompt('Height (m)')
        w = prompt('Weight (kg)')

        bmi = w / (h * h)

        document.write('<CENTER><B>Height: '+h+' m</CENTER></B>')
        document.write('<CENTER><B>Weight: '+w+' kg</CENTER></B>')
        document.write('<CENTER><B>BMI: '+bmi+'</CENTER></B>')

    }