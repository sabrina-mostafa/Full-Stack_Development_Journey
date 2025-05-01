function outerFunc() {
    let name = "Sabrina";
    console.log("outerFunc call: " + name);

    function innerFunc() {
        console.log(name);
    }
    return innerFunc;
}

let inner = outerFunc();
inner();