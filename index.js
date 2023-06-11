const btnElement = document.getElementById("btn");
const inputElement = document.getElementById("birthday");
const pElement = document.getElementById("result");

function calculateAge() {
  const birthdayValue = inputElement.value;

  if (!birthdayValue) alert("Please Enter Date");
  else {
    const age = getAge(birthdayValue);
    pElement.innerText = `Your Age Is ${age} ${
      age > 1 || age < -1 ? "Years" : "Year"
    }  Old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month == 0 && currentDate.getDate() < birthdayDate.getDate())
  )
    age--;
  return age;
}

btnElement.addEventListener("click", calculateAge);
