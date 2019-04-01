var t1
var t2
var t3
var array

t1 = {}
t2 = {}
t3 = {}
array = {}

function main()
    {
        t1.s = rand()
        t2.s = rand()
        t3.s = rand()

        array = [t1.s, t2.s, t3.s]

        document.write(t1.s)
        document.write('<BR>')
        document.write(t2.s)
        document.write('<BR>')
        document.write(t3.s)
        document.write('<BR>')

        document.write(array[1])
    }   

function rand()
    {
        return(Math.floor(Math.random() * 100))
    }