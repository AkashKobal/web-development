let userInput = document.getElementById("date");
let display = document.getElementById("display");

userInput.max = new Date().toISOString().split("T")[0]; // disable future date

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let userDate = birthDate.getDate();
    let userMonth = birthDate.getMonth() + 1;
    let userYear = birthDate.getFullYear();


    let today = new Date();


    let todaysDate = today.getDate();
    let todaysMonth = today.getMonth() + 1;
    let todaysYear = today.getFullYear();


    let date3, month3, year3;

    year3 = todaysYear - userYear;

    if (todaysMonth >= userMonth) {
        month3 = todaysMonth - userMonth;
    }
    else {
        month3--;
        month3 = 12 + todaysMonth - userMonth;
    }
    if (todaysDate >= userDate) {
        date3 = todaysDate - userDate;
    }
    else {
        month3--;
        date3 = getDateInMonth(userYear, userMonth) + todaysDate - userDate;
    }
    if (month3 < 0) {
        month3 == 11;
        year3--
    }
    //   console.log(year3,month3,date3);
    // display.innerHTML = `Your Age is ${year3} years, ${month3} months and ${date3} days`;
    display.innerText = `Your Age is ${year3} years, ${month3} months and ${date3} days`;

}

function getDateInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

