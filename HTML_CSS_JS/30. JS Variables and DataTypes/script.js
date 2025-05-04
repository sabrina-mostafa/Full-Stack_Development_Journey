// Global scoped
var a = 12;
if (true) {
    console.log(a);
}

// Function scoped
function solve() {
    var age=25 ;
    console.log(age) ;
}
solve() ;


// Blocked Scope
{
    let x=100 ;
    console.log(x) ;
}