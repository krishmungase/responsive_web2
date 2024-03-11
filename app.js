let features = document.getElementById("Features");
let company = document.getElementById("Company");

function toggle() {
  if (features.classList.contains("hidden")) {
    features.classList.remove("hidden");
  } else {
    features.classList.add("hidden");
  }
}

function toggle2() {
  if (company.classList.contains("hidden")) {
    company.classList.remove("hidden");
  } else {
    company.classList.add("hidden");
  }
}
