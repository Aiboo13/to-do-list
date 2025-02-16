const form = document.querySelector('form');
const input = document.querySelector('input');
const tbody = document.querySelector('tbody');
let no = localStorage.getItem('taskCounter') ? parseInt(localStorage.getItem('taskCounter')) : 1;

// Simpan data tugas ke localStorage
function saveToLocalStorage() {
  const rows = tbody.querySelectorAll('tr');
  const tasks = [];
  rows.forEach((row) => {
    const task = {
      no: row.querySelector('th').innerText, // Nomor baris
      task: row.querySelector('td').innerText, // Teks tugas
      checked: row.querySelector('input[type="checkbox"]').checked, // Status checkbox
    };
    tasks.push(task); // Tambahkan tugas ke array
  });
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Simpan array ke localStorage
}

// Muat data tugas dari localStorage
function loadFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Ambil data atau array kosong
  tasks.forEach((task) => {
    addRow(task.task, task.checked, task.no); // Tambahkan baris untuk setiap tugas
  });
}

// Tambahkan baris baru ke tabel
function addRow(taskText, isChecked = false, rowNo = null) {
  const newTr = document.createElement('tr');
  const newTh = document.createElement('th');
  const newTd = document.createElement('td');
  const editBtn = document.createElement('button'); // Tombol edit
  const newTd2 = document.createElement('td');
  const newInput = document.createElement('input');
  const deleteBtn = document.createElement('button');

  newInput.type = 'checkbox';
  editBtn.innerText = "Edit"; // Tombol edit
  newTh.innerText = rowNo || no++; // Nomor baris
  newTd.innerText = taskText; // Teks tugas
  newInput.checked = isChecked; // Status checkbox

  deleteBtn.innerText = "Delete"; // Tombol hapus
  deleteBtn.style.margin = "4%";
  deleteBtn.classList.add('Delete');

  newTd2.append(newInput, deleteBtn); // Gabungkan checkbox dan tombol hapus
  newTr.append(newTh, newTd, editBtn, newTd2); // Gabungkan semua elemen ke baris
  tbody.append(newTr); // Tambahkan baris ke tabel

  if (isChecked) {
    newTd.style.textDecoration = "line-through";
  }

  // Event listener untuk checkbox
  newInput.addEventListener('change', () => {
    if (newInput.checked) {
      newTd.style.textDecoration = "line-through"; // Coret teks jika dicentang
    } else {
      newTd.style.textDecoration = "none"; // Hapus coretan jika tidak dicentang
    }
    saveToLocalStorage(); // Simpan perubahan ke localStorage
  });

  // Event listener untuk tombol edit
  editBtn.addEventListener('click', () => {
    const currentText = newTd.innerText; // Ambil teks saat ini
    const editInput = document.createElement('input'); // Buat input field
    editInput.type = 'text';
    editInput.value = currentText; // Isi input dengan teks saat ini

    newTd.innerText = ''; // Kosongkan teks
    newTd.appendChild(editInput); // Tambahkan input field ke dalam td

    editInput.focus(); // Fokuskan ke input field

    // Event listener untuk menyimpan perubahan saat tombol Enter ditekan
    editInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        newTd.innerText = editInput.value; // Simpan teks baru
        saveToLocalStorage(); // Simpan perubahan ke localStorage
      }
    });
  });

  localStorage.setItem('taskCounter', no); // Simpan counter ke localStorage
}

// Event listener untuk form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Hindari reload halaman
  addRow(input.value); // Tambahkan baris dengan nilai input
  input.value = ''; // Kosongkan input
  saveToLocalStorage(); // Simpan data ke localStorage
});

// Event listener untuk tombol delete
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('Delete')) {
    e.preventDefault(); // Hindari aksi default
    e.target.parentElement.parentElement.remove(); // Hapus baris
    renumberRows(); // Atur ulang nomor baris
    saveToLocalStorage(); // Simpan perubahan ke localStorage
  }
});

// Fungsi untuk mengatur ulang nomor baris
function renumberRows() {
  const rows = tbody.querySelectorAll('tr');
  rows.forEach((row, index) => {
    row.querySelector('th').innerText = index + 1; // Perbarui nomor baris
  });
  no = rows.length + 1; // Update counter untuk baris berikutnya
}

// Muat data dari localStorage saat halaman dimuat
loadFromLocalStorage();