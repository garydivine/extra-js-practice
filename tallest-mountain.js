let mountainHeights = [19341, 29029, 22837, 20320];

function getTallestMountain() {
    let highestMountain = 0;
    for (let height of mountainHeights) {
        if (height > highestMountain) {
            highestMountain = height;
        }
    }
    return highestMountain;
}

console.log(getTallestMountain());


