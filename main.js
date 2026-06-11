const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

let currentInput;
input.addEventListener("input", (event) => {
  currentInput = event.target.value;
  console.log(currentInput);
});
const state = {
  items: [],
  addItem(value) {
    this.items.push({
      id: crypto.randomUUID(),
      name: value,
      isCompleted: false,
    });
  },
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  state.addItem(input.value);
  renderList();
  input.value = "";
});

function renderList() {
  list.innerHTML = "";
  state.items.forEach((item) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const divBtn = document.createElement("div");
    const btnCheck = document.createElement("button");
    btnCheck.type = "radio";
    const btnDelete = document.createElement("button");
    span.innerHTML = `${item.name}`;
    span.classList.add("span");
    divBtn.classList.add("button-div");
    btnCheck.classList.add("checkBtn");

    btnDelete.classList.add("btn-delete");
    btnDelete.innerHTML = `Delte`;

    btnCheck.addEventListener("click", (e) => {
      const complete = state.items.find((i) => i.id === item.id);
      complete.isCompleted = !complete.isCompleted;
      if (complete.isCompleted) {
        span.classList.add("checked");
      } else {
        span.classList.remove("checked");
      }
    });

    btnDelete.addEventListener("click", (e) => {
      state.items = state.items.filter((i) => i.id !== item.id);
      renderList();
    });

    divBtn.appendChild(btnCheck);
    divBtn.appendChild(span);
    divBtn.appendChild(btnDelete);
    li.appendChild(divBtn);
    list.appendChild(li);
  });
}
