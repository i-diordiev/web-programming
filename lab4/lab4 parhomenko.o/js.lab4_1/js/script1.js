console.log('Hello World!');
a = new Array();
var n = prompt('Довжина масиву: ');
for ( i = 0; i < n; i++ ) {
    a.push( Math.round( Math.random() * 9));
}
document.write("Масив: " + a + "<br/>")

var min = Math.min.apply(null, a),
    max = Math.max.apply(null, a);
document.write("Максимальний елемент масиву: " + max + "<br/>")
document.write("Мінімальний елемент масиву: " + min + "<br/>")

function g (a, b)
{
if (a < b) return 1;
if (a > b) return -1;
if (a == b) return 0;
}
b = a.sort (g);
for (i = 0; i <b.length; i ++)
document.write(b [i] + " ")

