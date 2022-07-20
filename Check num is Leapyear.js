var year = parseInt(prompt("Enter the year"));


if ((year % 100 != 0) && (year % 400 == 0) || (year % 4 == 0)) {

    console.log(year + "It is a leapyear");
}

else {

    console.log(year + "It is not a leap year");
}
checkleapyear(year);

