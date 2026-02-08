const input = document.getElementById("input");
const button = document.getElementById("button");
const groceryList = document.getElementById("groceryList");

button.addEventListener("click", function () {
  const item = input.value;
  if (item) {
    const li = document.createElement("li");
    li.textContent = item;
    groceryList.appendChild(li);
  }
  groceryList.appendChild(li);
});
input.value = "";
