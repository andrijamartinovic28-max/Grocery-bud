const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

const state = {
  items: [],
  addItem(value) {
    this.items.push({
      id: crypto.randomUUID(),
      name: value,
      isCompleted: false,
    });
  },
  removeItem(id) {
    this.items = state.items.filter((i) => i.id !== id);
  },
  updateItem(id) {
    const complete = this.items.find((i) => i.id === id);
    complete.isCompleted = !complete.isCompleted;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  state.addItem(input.value);
  console.log(state);
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

    const btnDelete = document.createElement("button");
    span.innerHTML = `${item.name}`;
    span.classList.add("span");
    divBtn.classList.add("button-div");
    btnCheck.classList.add("checkBtn");

    btnDelete.classList.add("btn-delete");
    btnDelete.innerHTML = `Delte`;

    btnCheck.addEventListener("click", (e) => {
      state.updateItem(item.id);
      span.classList.toggle("checked");
      console.log(state);
    });

    btnDelete.addEventListener("click", (e) => {
      state.removeItem(item.id);
      renderList();
    });

    divBtn.appendChild(btnCheck);
    divBtn.appendChild(span);
    divBtn.appendChild(btnDelete);
    li.appendChild(divBtn);
    list.appendChild(li);
  });
}
