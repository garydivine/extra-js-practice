let word = "kayak";
let isPalindrome = false;


if (word.split("").reverse().join("") == word) {
    isPalindrome = true;
}

console.log(isPalindrome);