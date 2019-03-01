 const a =parseFloat(prompt("Enter a"));
const b =parseFloat(prompt("Enter b"));
const c =parseFloat(prompt("Enter c"));
let x1;
let x2;

const d = (b*b)-(4*a*c);
alert("d= " +d );
culcDisc(d);

function culcDisc(value) {
    if (value >0)
    {
        x1=(b*(-1) + Math.sqrt(value))/(2*a);
        x2=(b*(-1) - Math.sqrt(value))/(2*a);
        alert(`d > 0,we have two value x1 - ${ x1} , and x2 -${ x2}.`);
    }
    else if (value =0)
    {
         x1=(b*(-1) + Math.sqrt(value))/(2*a);
         alert(`d = 0, we have one value x1 - ${ x1}.`);
    }
    else (value < 0)
    {
        alert ("Value no identification" );
    }
    
}
