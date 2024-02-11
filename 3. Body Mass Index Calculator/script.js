function bmiCalculator(){

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let result = document.getElementById("result");
    document.write("Entered Height is :"+height + "<br>");
    document.write("Entered Weight is :"+weight+ "<br>");

    var results = weight/(height*height);
    document.write("Result is :"+results);
    }