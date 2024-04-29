function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height = height * 0.01;
  let BMI = weight / height ** 2;

  alert(BMI);
  if (BMI < 18.5) {
    alert("Underweight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    alert("Healthy weight");
  } else if (BMI >= 25.0 && BMI <= 29.9) {
    alert("Overweight");
  } else {
    alert("Above Obesity");
  }
}
