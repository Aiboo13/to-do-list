// const form = document.querySelector('form');
// // mendeklarasikan untuk form
// const input = document.querySelector('input');
// // mendeklarasikan untuk input
// const tbody = document.querySelector('tbody');
// // mendeklarasikan untuk tbody
// let no = 1;
// //mendeklarasikan untk nomor 


// form.addEventListener('submit', (e) => {
//   // form jika sudmit akan menjalna sebuah dunctor
//   e.preventDefault();
//   no++;
//   const newTr = document.createElement('tr');
//   // membuat tabel row atau tr
//   const newTh = document.createElement('th');
//   // membuat unutk tabel head atau th
//   const newTd = document.createElement('td')
//     // membuat unutk tabel data atau td
//   const newTd2 = document.createElement('td');
//   const newInput = document.createElement('input'); // Buat elemen input
//   // untuk meneria inputan
//   const deleteBtn = document.createElement('button');
//   //  membuat button untuk tombol delate
//   newInput.type = 'checkbox';
//   // membuat checkbox untuk ceklis
//   newTh.innerText = no;
//   // newTd2element.id = "delete";
//   newTd.innerText = input.value;

//   deleteBtn.innerText = "Delete";
//   deleteBtn.style.margin= "4%";
//   // membuat style margin suoaya tidak berdengketan
//   deleteBtn.classList.add('Delete');
//   // menambhakan kelas delete
//   newTd2.append(newInput, deleteBtn);
//   // menyisiokan ke newtf2
//   newTr.append(newTh, newTd, newTd2);
//   // menyusupkan ke tr
//   tbody.append(newTr);
//   input.value = '';
//   // supaya kosong setelah sudmit
//   console.dir(newTd2);

//   newInput.addEventListener('change',() =>{
//     // untuk merubah text
//     if(newInput.checked){
//       newTd.style.textDecoration ="line-through"
//     }else{
//       newTd.style.textDecoration ="none"
//     }
//   });
// })


// // Hapus item saat tombol delete diklik
// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains('Delete')) {
//     e.preventDefault();
//     e.target.parentElement.parentElement.remove();
//     renumberRows();
//   }
// })


// // Ubah nomor urut setelah item dihapus
// function renumberRows() {
//   const rows = tbody.querySelectorAll('tr');
//   rows.forEach((row, index) => {
//     row.querySelector('th').innerText = index + 1;
//   });
//   no = rows.length; // Update the global row counter
// }

// document.querySelectorAll('.delete').forEach(function(item) {
//   item.addEventListener('click', function(e) {
//     e.preventDefault();
//     this.parentElement.parentElement.remove();
//   })
 
// })



// form.addEventListener('submit', function(e){
// 	e.preventDefault(); 
// 	// menhentikan submit form secara default
//   const noteValue = input.value;
// 	// menerima isi dari input
// 	const newList = document.createElement('li');
// 	// membuat element baru yaitu list
// 	newList.innerText = noteValue;
// 	list.append(newList);
// 	// menambhkan newlist di list
// 	input.value = '';
// 	// supaya kembali kosong setelah sudmid
// });


// ai json untuk localstorage

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const tbody = document.querySelector('tbody');
// let no = 0;

// // Fungsi untuk menyimpan data ke localStorage
// function saveToLocalStorage() {
//   const rows = tbody.querySelectorAll('tr');
//   const tasks = [];
//   rows.forEach((row) => {
//     const task = {
//       no: row.querySelector('th').innerText,
//       task: row.querySelector('td').innerText,
//       checked: row.querySelector('input[type="checkbox"]').checked,
//     };
//     tasks.push(task);
//   });
//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Fungsi untuk memuat data dari localStorage
// function loadFromLocalStorage() {
//   const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   tasks.forEach((task) => {
//     addRow(task.task, task.checked, task.no);
//   });
// }

// // Fungsi untuk menambahkan baris baru
// function addRow(taskText, isChecked = false, rowNo = null) {
//   const newTr = document.createElement('tr');
//   const newTh = document.createElement('th');
//   const newTd = document.createElement('td');
//   const newTd2 = document.createElement('td');
//   const newInput = document.createElement('input');
//   const deleteBtn = document.createElement('button');

//   newInput.type = 'checkbox';
//   newTh.innerText = rowNo || no++;
//   newTd.innerText = taskText;
//   newInput.checked = isChecked;

//   deleteBtn.innerText = "Delete";
//   deleteBtn.style.margin = "4%";
//   deleteBtn.classList.add('Delete');

//   newTd2.append(newInput, deleteBtn);
//   newTr.append(newTh, newTd, newTd2);
//   tbody.append(newTr);

//   // Tambahkan event listener untuk checkbox
//   newInput.addEventListener('change', () => {
//     if (newInput.checked) {
//       newTd.style.textDecoration = "line-through";
//     } else {
//       newTd.style.textDecoration = "none";
//     }
//     saveToLocalStorage(); // Simpan perubahan ke localStorage
//   });
// }

// // Event listener untuk form submission
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   addRow(input.value);
//   input.value = '';
//   saveToLocalStorage(); // Simpan data ke localStorage
// });

// // Event listener untuk tombol delete
// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains('Delete')) {
//     e.preventDefault();
//     e.target.parentElement.parentElement.remove();
//     renumberRows();
//     saveToLocalStorage(); // Simpan data ke localStorage setelah menghapus
//   }
// });

// // Fungsi untuk mengatur ulang nomor baris
// function renumberRows() {
//   const rows = tbody.querySelectorAll('tr');
//   rows.forEach((row, index) => {
//     row.querySelector('th').innerText = index + 1;
//   });
//   no = rows.length + 1; // Update nomor baris berikutnya
// }

// // Muat data dari localStorage saat halaman dimuat
// loadFromLocalStorage();

const form = document.querySelector('form');
const input = document.querySelector('input');
const tbody = document.querySelector('tbody');
let no = 1; // Counter untuk nomor baris

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
  const newTd2 = document.createElement('td');
  const newInput = document.createElement('input');
  const deleteBtn = document.createElement('button');

  newInput.type = 'checkbox';
  newTh.innerText = rowNo || no++; // Nomor baris
  newTd.innerText = taskText; // Teks tugas
  newInput.checked = isChecked; // Status checkbox

  deleteBtn.innerText = "Delete"; // Tombol hapus
  deleteBtn.style.margin = "4%";
  deleteBtn.classList.add('Delete');

  newTd2.append(newInput, deleteBtn); // Gabungkan checkbox dan tombol hapus
  newTr.append(newTh, newTd, newTd2); // Gabungkan semua elemen ke baris
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
  localStorage.setItem("taskCounter", no)
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


const key = document.querySelector('input')

key.addEventListener('keydown', function(e) {
  console.log(e.code)
});