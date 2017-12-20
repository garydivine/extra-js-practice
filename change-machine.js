let amount = 47;
let change = [0, 0 , 0 , 0];

while (amount >= 20) {
    change[0] += 1;
    amount = amount - 20;
}

while (amount >= 10) {
    change[1] += 1;
    amount = amount - 10;
}

while (amount >= 5) {
    change[2] += 1;
    amount = amount - 5;
}

while (amount >= 1) {
    change[3] += 1;
    amount = amount - 1;
}

console.log(change);