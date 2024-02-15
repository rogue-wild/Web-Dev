const form = document.querySelector("form");

console.log(form);
//this usecase will give empty values
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === "" || isNaN(height) || height <= 0) {
    results.innerHTML = "Please provide a valid height";
    return;
  }
  if (weight === "" || isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please provide a valid weight";
    return;
  } else {
    results.innerHTML = `Your BMI is ${bmi}`;
  }

  const message = document.querySelector("#message");
  if (bmi < 18.5) {
    message.innerHTML = "<br> You are underweight";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    message.innerHTML = "<br> You are normal weight";
  }
  if (bmi >= 25 && bmi <= 29.9) {
    message.innerHTML = "<br> You are overweight";
  }
});
