function addRow(taskText, isChecked = false, rowNo = null) {
  // ... existing code ...

  const newTr = document.createElement('tr');
  const newTh = document.createElement('th');
  const newTd = document.createElement('td');
  const editBtn = document.createElement('button');
  const newTd2 = document.createElement('td');
  const newInput = document.createElement('input');
  const deleteBtn = document.createElement('button');

  newInput.type = 'checkbox';
  editBtn.innerText = "Edit";
  editBtn.classList.add('Edit'); // Add this line
  newTh.innerText = rowNo || no++;
  newTd.innerText = taskText;
  newInput.checked = isChecked;

  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add('Delete');

  // ... rest of the function
}
