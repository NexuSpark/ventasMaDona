const branches = 5;

function createBranchesFields() {
  const container = document.getElementById("branchesFields");
  for (let i = 1; i <= branches; i++) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerText = `Sucursal ${i}`;
    label.setAttribute("for", `branch${i}`);
    input.setAttribute("id", `branch${i}`);
    input.setAttribute("type", "number");
    input.setAttribute("step", "0.01");
    input.setAttribute("value", 0);
    input.setAttribute("min", 0);
    container.appendChild(label);
    container.appendChild(input);
  }
}

function init() {
  createBranchesFields();
}

function calculate(event) {
  event.preventDefault();
  let total = 0;
  for (let i = 1; i <= branches; i++) {
    const value = document.getElementById(`branch${i}`).value;
    total += parseFloat(value);
  }
  document.getElementById("total").innerText = total;
}

document.querySelector("form").addEventListener("submit", event => event.preventDefault());

document.getElementById("calculate").addEventListener("click", calculate);
