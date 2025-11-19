// Selecting required elements
const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

let currentEditingItem = null; // to track current li being edited

// ------------------------
// ADD PRODUCT
// ------------------------
addBtn.addEventListener("click", () => {
  const name = productInput.value.trim();
  if (!name) return;

  addProduct(name);
  productInput.value = "";
});

// Function to append new product inside <ul>
function addProduct(name) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="text">${name}</span>
        <div class="actions">
           <button class="edit">Edit</button>
           <button class="delete">Delete</button>
        </div>
    `;
  productList.appendChild(li);
}

// ------------------------
// EVENT DELEGATION FOR EDIT & DELETE
// ------------------------
productList.addEventListener("click", (e) => {
  const target = e.target;
  const li = target.closest("li"); // get parent li

  if (!li) return;

  // DELETE BUTTON
  if (target.classList.contains("delete")) {
    li.remove();
  }

  // EDIT BUTTON
  if (target.classList.contains("edit")) {
    enterEditMode(li);
  }
});

// ------------------------
// ENTER EDIT MODE
// ------------------------
function enterEditMode(li) {
  // If another item is being edited → save it first
  if (currentEditingItem && currentEditingItem !== li) {
    saveEdit(currentEditingItem);
  }

  currentEditingItem = li;

  const span = li.querySelector(".text");
  const oldValue = span.textContent;

  // Replace text with input box
  span.innerHTML = `<input type="text" class="editInput" value="${oldValue}">`;

  const input = span.querySelector(".editInput");
  input.focus();

  // Save on ENTER key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      saveEdit(li);
    }
  });
}

// ------------------------
// SAVE EDIT (used for auto-save as well)
// ------------------------
function saveEdit(li) {
  if (!li) return;

  const input = li.querySelector(".editInput");
  if (!input) return;

  const newValue = input.value.trim() || "Unnamed Product";
  li.querySelector(".text").textContent = newValue;

  currentEditingItem = null;
}

// ------------------------
// AUTO-SAVE when clicking outside the editing item
// ------------------------
document.addEventListener("click", (e) => {
  if (!currentEditingItem) return;

  const isClickInside = currentEditingItem.contains(e.target);

  if (!isClickInside) {
    saveEdit(currentEditingItem);
  }
});
