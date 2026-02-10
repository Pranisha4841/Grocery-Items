const input = document.getElementById("input");
const button = document.getElementById("button");
const groceryList = document.getElementById("groceryList");

button.addEventListener("click", function () {
  const item = input.value;
  if (item !== "") {
    const li = document.createElement("li");
    li.textContent = item;

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.onclick = function () {
      const newItem = prompt("Edit item:", span.textContent);
      if (newItem !== null && newItem !== "") {
        span.textContent = newItem;
      }
    };
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      li.remove();
    };
    li.appendChild(edit);
    li.appendChild(deleteBtn);

    groceryList.appendChild(li);

    input.value = "";
  }
});
