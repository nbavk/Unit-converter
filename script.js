
const units = {
  length: {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
    lightyear: 9.461e+15
  },
  weight: {
    mg: 0.000001,
    g: 0.001,
    kg: 1,
    tonne: 1000,
    oz: 0.0283495,
    lb: 0.453592,
    stone: 6.35029
  },
  time: {
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
    month: 2629746,
    year: 31556952
  }
};

function loadUnits() {
  const category = document.getElementById("category").value;
  const fromUnit = document.getElementById("fromUnit");
  const toUnit = document.getElementById("toUnit");

  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  for (let unit in units[category]) {
    let option1 = document.createElement("option");
    option1.value = unit;
    option1.textContent = unit;
    fromUnit.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = unit;
    option2.textContent = unit;
    toUnit.appendChild(option2);
  }
}

function convert() {
  const category = document.getElementById("category").value;
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;

  if (isNaN(inputValue)) {
    document.getElementById("result").textContent = "Please enter a valid number.";
    return;
  }

  const resultValue = (inputValue * units[category][from]) / units[category][to];
  document.getElementById("result").textContent = `${inputValue} ${from} = ${resultValue.toFixed(6)} ${to}`;
}

window.onload = loadUnits;
