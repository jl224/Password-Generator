var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
var pwLength
var useUpper
var useLower
var useNumber
var useSpecial

function promptmessage() {
    pwLength = prompt("Please enter a password length between 8 and 128")
    useUpper = confirm("Would you like to use uppercase letters?");
    useLower = confirm("Would you like to use lowercase letters?");
    useNumber = confirm("Would you like to use numbers?");
    useSpecial = confirm("Would you like to use special characters?");

    console.log(pwLength);
    console.log(useUpper);
    console.log(useLower);
    console.log(useNumber);
    console.log(useSpecial);
}


function generate() {
    promptmessage()
    var pc = ""
    if (useUpper) {
        console.log("Validated and Working Uppercase True");
        pc = pc + uppercase
        // set var of possible letters and add uppercase to it.
    }
    console.log(pc);

    if (useLower) {
        console.log("Validated and Working Lowercase True");
        pc = pc + lowercase
        // set var of possible letters and add uppercase to it.
    }
    console.log(pc);

    if (numbers) {
        console.log("Validated and working Numbers True")
        pc = pc + numbers
    }
    console.log(pc);

    if (symbols) {
        console.log("Validated and working Special True")
        pc = pc + symbols
    }
    console.log(pc);

    if (!useUpper && !useLower && !useNumber && !useSpecial) {
        alert("You need to choose at least one criteria");
        generate()

    }


    var password = '';
    for (var i = 0; i < pwLength; i++) {
        var character = Math.floor(Math.random() * pc.length);
        console.log(character);
        password += pc[character]
        console.log(password);

    }
    console.log(password);
    // Alert the results
    alert(password);
    return password;

}
generate()