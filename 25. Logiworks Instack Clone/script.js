const startMinutes = 20;
const startHour = 1;

let time = startMinutes * 60;
let countDown = document.getElementById("countDown");

setInterval(countdown, 1000);

function countdown() {
    let hour = (new Date()).getHours();
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDown.innerHTML = "Time Left: " + "00" + ":" + minutes + ":" + seconds;
    time--;
}
let question1 = {
    question: "1. Which of the following functions is a built-in function in python? ",
    option1: "print()",
    option2: "len()",
    option3: "type()",
    option4: "all()"
}

let dispQuestion = document.getElementById("question");
let opt1 = document.querySelector("#option1");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

function one() {

    dispQuestion.innerText = question1.question;
    opt1.innerText = question1.option1;
    option2.innerText = question1.option2;
    option3.innerText = question1.option3;
    option4.innerText = question1.option4;
}

// 2. What is the output of the expression: 
// round(4.576) 
// a) 4.5 b) 5 c) 4 d) 4.6 

let question2 = {
    question: "2. What is the output of the expression: round(4.576) ",
    option1: "4.5",
    option2: "5",
    option3: "4",
    option4: "4.6"
}
function two() {
    dispQuestion.innerText = question2.question;
    opt1.innerText = question2.option1;
    option2.innerText = question2.option2;
    option3.innerText = question2.option3;
    option4.innerText = question.option4;
}


// 3. The function pow(x,y,z) is evaluated as: 
// a) (x**y)**z b) (x**y) / z 
// c) (x**y) % z d) (x**y)*z 

let question3 = {
    question: "3. The function pow(x,y,z) is evaluated as: ",
    option1: "(x**y)**z",
    option2: "(x**y) / z",
    option3: "(x**y) % z",
    option4: "(x**y)*z"
}
function three() {
    dispQuestion.innerText = question3.question;
    opt1.innerText = question3.option1;
    option2.innerText = question3.option2;
    option3.innerText = question3.option3;
    option4.innerText = question3.option4;
}

// 4. What is the output of the function shown below? 
// all([2,4,0,6]) 
// a) Error b) True c) False c) 0 

let question4 = {
    question: "4. What is the output of the function shown below? all([2,4,0,6])",
    option1: "Error",
    option2: "True",
    option3: "False",
    option4: "0"
}
function four() {
    dispQuestion.innerText = question4.question;
    opt1.innerText = question4.option1;
    option2.innerText = question4.option2;
    option3.innerText = question4.option3;
    option4.innerText = question4.option4;
}

// 5. What is the output of the expression? 
// round(4.5676,2)? 
// a) 4.5 b) 4.6 c) 4.57 d) 4.56 

let question5 = {
    question: "5. What is the output of the expression? round(4.5676,2)?",
    option1: "4.5",
    option2: "4.6",
    option3: "4.57",
    option4: "4.56"
}
function five() {
    dispQuestion.innerText = question5.question;
    opt1.innerText = question5.option1;
    option2.innerText = question5.option2;
    option3.innerText = question5.option3;
    option4.innerText = question5.option4;
}

// 6. What is the output of the following function? 
// any([2>8, 4>2, 1>2]) 
// a) Error b) True c) False d) 4>2 

let question6 = {
    question: "6. What is the output of the following function? any([2>8, 4>2, 1>2])",
    option1: "Error",
    option2: "True",
    option3: "False",
    option4: "4>2"
}

function six() {
    dispQuestion.innerText = question6.question;
    opt1.innerText = question6.option1;
    option2.innerText = question6.option2;
    option3.innerText = question6.option3;
    option4.innerText = question6.option4;
}


// 7. What is the output of the following function? 
// complex(1+2j) 
// a) Error b) 1 c) 2j d) 1+2j 

let question7 = {
    question: "7. What is the output of the following function? complex(1+2j)",
    option1: "Error",
    option2: "1",
    option3: "2j",
    option4: "1+2j"
}
function seven() {
    dispQuestion.innerText = question7.question;
    opt1.innerText = question7.option1;
    option2.innerText = question7.option2;
    option3.innerText = question7.option3;
    option4.innerText = question7.option4;
}

// 8. What is the output of the function complex() ? 
// a) 0j b) 0+0j c) 0 d) Error 

let question8 = {
    question: "8. What is the output of the function complex() ?",
    option1: "0j",
    option2: "0+0j",
    option3: "0",
    option4: "Error"
}
function eight() {
    dispQuestion.innerText = question8.question;
    opt1.innerText = question8.option1;
    option2.innerText = question8.option2;
    option3.innerText = question8.option3;
    option4.innerText = question8.option4;
}

// 9. The function divmod(a,b), where both ‗a‘ and ‗b‘ are integers is evaluated as: 
// a) (a%b, a//b) b) (a//b, a%b) 
// c) (a//b, a*b) c) (a/b, a%b) 

let question9 = {
    question: "9. The function divmod(a,b), where both ‗a‘ and ‗b‘ are integers is evaluated as: ",
    option1: "(a%b, a//b)",
    option2: "(a//b, a%b)",
    option3: "(a//b, a*b)",
    option4: "(a/b, a%b)"
}
function nine() {
    dispQuestion.innerText = question9.question;
    opt1.innerText = question9.option1;
    option2.innerText = question9.option2;
    option3.innerText = question9.option3;
    option4.innerText = question9.option4;
}


// 10. What is the output of the functions shown below? 
// divmod(10.5,5) 
// divmod(2.4,1.2) 
// a) (2.00, 0.50) and (2.00, 0.00) b) (2, 0.5) and (2, 0) 
// c) (2.0, 0.5) and (2.0, 0.0) d) (2, 0.5) and (2) 

let question10 = {
    question: "10. What is the output of the functions shown below? divmod(10.5,5) divmod(2.4,1.2)",
    option1: "(2.00, 0.50) and (2.00, 0.00)",
    option2: "(2, 0.5) and (2, 0)",
    option3: "(2.0, 0.5) and (2.0, 0.0)",
    option4: "(2, 0.5) and (2)"
}
function ten() {
    dispQuestion.innerText = question10.question;
    opt1.innerText = question10.option1;
    option2.innerText = question10.option2;
    option3.innerText = question10.option3;
    option4.innerText = question10.option4;
}


// 11. The function complex(‗2-3j‘) is valid but the function complex(‗2 – 3j‘) is invalid. State whether this statement is true or false. 
// a) True b) False 

let question11 = {
    question: "11. The function complex(‗2-3j‘) is valid but the function complex(‗2 – 3j‘) is invalid. State whether this statement is true or false.",
    option1: "True",
    option2: "False"
}

function eleven() {
    dispQuestion.innerText = question11.question;
    opt1.innerText = question11.option1;
    option2.innerText = question11.option2;
}

// 12. What is the output of the function shown below? 
// list(enumerate([2, 3])) 
// a) Error b) [(1, 2), (2, 3)] 
// c) [(0, 2), (1, 3)] d) [(2, 3)] 

let question12 = {
    question: "12. What is the output of the function shown below? list(enumerate([2, 3]))",
    option1: "Error",
    option2: "[(1, 2), (2, 3)]",
    option3: "[(0, 2), (1, 3)]",
    option4: "[(2, 3)]"
}
function twelve() {
    dispQuestion.innerText = question12.question;
    opt1.innerText = question12.option1;
    option2.innerText = question12.option2;
    option3.innerText = question12.option3;
    option4.innerText = question12.option4;
}

// 13. What are the outcomes of the function shown below? 
// x=3 
// eval('x^2') 
// a) Error b) 1 c) 9 d) 6 

let question13 = {
    question: "13. What are the outcomes of the function shown below? x=3 eval('x^2')",
    option1: "Error",
    option2: "1",
    option3: "9",
    option4: "6"
}
function thirteen() {
    dispQuestion.innerText = question13.question;
    opt1.innerText = question13.option1;
    option2.innerText = question13.option2;
    option3.innerText = question13.option3;
    option4.innerText = question13.option4;
}


// 14. What is the output of the functions shown below? 
// float('1e-003') 
// float('2e+003') 
// a) 3.00 and 300 b) 0.001 and 2000.0 
// c) 0.001 and 200 d) Error and 2003 

let question14 = {
    question: "14. What is the output of the functions shown below? float('1e-003') float('2e+003')",
    option1: "3.00 and 300",
    option2: "0.001 and 2000.0",
    option3: "0.001 and 200",
    option4: "Error and 2003"
}
function fourteen() {
    dispQuestion.innerText = question14.question;
    opt1.innerText = question14.option1;
    option2.innerText = question14.option2;
    option3.innerText = question14.option3;
    option4.innerText = question14.option4;
}


// 15. Which of the following functions does not necessarily accept only iterables as arguments? 
// a) enumerate() b) all() c) chr() d) max() 

let question15 = {
    question: "15. Which of the following functions does not necessarily accept only iterables as arguments?",
    option1: "enumerate()",
    option2: "all()",
    option3: "chr()",
    option4: "max()"
}

function fifteen() {
    dispQuestion.innerText = question15.question;
    opt1.innerText = question15.option1;
    option2.innerText = question15.option2;
    option3.innerText = question15.option3;
    option4.innerText = question15.option4;
}

// 16. Which of the following functions accepts only integers as arguments? 
// a) ord() b) min() c) chr() d) any() 

let question16 = {
    question: "16. Which of the following functions accepts only integers as arguments?",
    option1: "ord()",
    option2: "min()",
    option3: "chr()",
    option4: "any()"
}

function sixteen() {
    dispQuestion.innerText = question16.question;
    opt1.innerText = question16.option1;
    option2.innerText = question16.option2;
    option3.innerText = question16.option3;
    option4.innerText = question16.option4;
}

// 17. Suppose there is a list such that: l=[2,3,4]. 
// If we want to print this list in reverse order, which of the following methods should be used? 
// a) reverse(l) b) list(reverse[(l)]) 
// c) reversed(l) d) list(reversed(l)) 

let question17 = {
    question: "17. Suppose there is a list such that: l=[2,3,4]. If we want to print this list in reverse order, which of the following methods should be used?",
    option1: "reverse(l)",
    option2: "list(reverse[(l)])",
    option3: "reversed(l)",
    option4: "list(reversed(l))"
}

function seventeen() {
    dispQuestion.innerText = question17.question;
    opt1.innerText = question17.option1;
    option2.innerText = question17.option2;
    option3.innerText = question17.option3;
    option4.innerText = question17.option4;
}

// 18. The output of the function: 
// float(' -12345\n') 
// (Note that the number of blank spaces before the number is 5) 
// a) -12345.0 (5 blank spaces before the number) 
// b) -12345.0 
// c) Error 
// d) -12345.000000000…. (infinite decimal places) 

let question18 = {
    question: "18. The output of the function: float(' -12345\n') (Note that the number of blank spaces before the number is 5)",
    option1: "-12345.0 (5 blank spaces before the number)",
    option2: "-12345.0",
    option3: "Error",
    option4: "-12345.000000000…. (infinite decimal places)"
}

function eighteen() {
    dispQuestion.innerText = question18.question;
    opt1.innerText = question18.option1;
    option2.innerText = question18.option2;
    option3.innerText = question18.option3;
    option4.innerText = question18.option4;
}

// 19. What is the output of the functions shown below? 
// ord(65) 
// ord(‗A‘) 
// a) A and 65 b) Error and 65 
// c) A and Error c) Error and Error 

let question19 = {
    question: "19. What is the output of the functions shown below? ord(65) ord(‗A‘)",
    option1: "A and 65",
    option2: "Error and 65",
    option3: "A and Error",
    option4: "Error and Error"
}

function nineteen() {
    dispQuestion.innerText = question19.question;
    opt1.innerText = question19.option1;
    option2.innerText = question19.option2;
    option3.innerText = question19.option3;
    option4.innerText = question19.option4;
}


// 20. What is the output of the functions shown below? 
// float(‗-infinity‘) 
// float(‗inf‘) 
// a) –inf and inf b) –infinity and inf 
// c) Error and Error d) Error and Junk value 

let question20 = {
    question: "20. What is the output of the functions shown below? float(‗-infinity‘) float(‗inf‘)",
    option1: "–inf and inf",
    option2: "–infinity and inf",
    option3: "Error and Error",
    option4: "Error and Junk value"
}

function twenty() {
    dispQuestion.innerText = question20.question;
    opt1.innerText = question20.option1;
    option2.innerText = question20.option2;
    option3.innerText = question20.option3;
    option4.innerText = question20.option4;
}
