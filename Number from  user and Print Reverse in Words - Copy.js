var numToword;
function getWord(numToword) {
    if (numToword == 0) {
        word = "Zero";
    }
    else if (numToword == 1) {

        word = "One";
    }

    else if (numToword == 2) {

        word = "Two";
    }
    else if (numToword == 3) {

        word = "Three";
    }
    else if (numToword == 4) {

        word = "Four";
    }
    else if (numToword == 5) {

        word = "Five";
    }
    else if (numToword == 6) {

        word = "Six";
    }
    else if (numToword == 7) {

        word = "Seven";
    }
    else if (numToword == 8) {

        word = "Eight";
    }
    else if (numToword == 9) {

        word = "Nine";
    }
    return word;

}

var num = parseInt(prompt("Enter the number"));
var x = '';

while (num != 0) {
    var lastdigit = num % 10;
    word = getWord(lastdigit);
    x=word;
    num = (num - lastdigit) / 10;
    console.log(x);
}




