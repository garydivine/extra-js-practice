const word = "javascript";
let rline = require("readline");
let prompt = rline.createInterface(process.stdin, process.stdout);

prompt.question("What letter would you like to guess?", function (letter) {
    let numberOfInstances = 0;

    for (let l of word) {
        if (l == letter) {
            numberOfInstances = numberOfInstances + 1;           
        }
    }

    if (numberOfInstances > 0) {
        console.log("Yeah, the letter " + letter + " exists "  + numberOfInstances + " time(s) in my word ");
    } else {
        console.log("Nope, that letter doesn't exist in my word.");
    }
    process.exit();
});