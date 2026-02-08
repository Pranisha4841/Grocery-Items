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

  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.className = "delete";
  delBtn.onclick = function () {
    groceryList.removeChild(li);
  };

  li.appendChild(delBtn);
  groceryList.appendChild(li);
});
