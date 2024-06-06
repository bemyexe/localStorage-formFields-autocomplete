const form = document.getElementById("form1");

const formFileds = form.elements;
const submitBtn = form.querySelector("[type=submit]");

submitBtn.addEventListener("click", clear);

function clear() {
  localStorage.clear();
}

for (let i = 0; i < formFileds.length; i++) {
  formFileds[i].addEventListener("change", changeHandler);
}

function changeHandler() {
  if (this.type !== "checkbox") {
    localStorage.setItem(this.name, this.value);
  } else {
    localStorage.setItem(this.name, this.checked);
  }
}

function checkStorage() {
  for (let i = 0; i < formFileds.length; i++) {
    if (formFileds[i].type !== "submit") {
      if (formFileds[i].type === "checkbox") {
        formFileds[i].checked = localStorage.getItem(formFileds[i].name);
      } else {
        formFileds[i].value = localStorage.getItem(formFileds[i].name);
      }
    }
  }
}
checkStorage();
