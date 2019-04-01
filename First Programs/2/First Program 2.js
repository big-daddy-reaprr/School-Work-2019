function main() 
    {
        var name;
        var age;
        var year;

        name = prompt('What is your Name?');
        document.write('Hi '+name+', How are you?');

        age = prompt('What is your Age', 9);
        year = 2019 - age;
        
        document.write('You are born in '+year);

    }