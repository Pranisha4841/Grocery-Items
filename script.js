const input = document.getElementById("input");
const button = document.getElementById("button");
const groceryList = document.getElementById("groceryList");

let editItem = null;

button.addEventListener("click", function () {
  const text = input.value.trim();
  if (text !== "") return;

  if (editItem !== null) {
    editItem.querySelector("span").textContent = text;
    button.textContent = "Add Item";
    editItem = null;

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
