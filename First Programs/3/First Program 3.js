function main() 
    {
        var name;
        var age;
        var year;

        name = prompt('What is your Name?');
        document.write('<CENTER><B><H1>Hi '+name+', How are you?</CENTER></B></H1>');

        age = prompt('What is your Age', 9);
        year = 2019 - age;
        
        document.write('<CENTER><B><H1>You are born in '+year+'</CENTER></B></H1>');
    }