const form = document.querySelector('form');
const input = document.querySelector('input');
const tbody = document.querySelector('tbody');
let no = 1;


form.addEventListener('submit', (e) => {
  e.preventDefault();
  no++;
  const newTr = document.createElement('tr');
  const newTh = document.createElement('th');
  const newTd = document.createElement('td')
  const newTd2 = document.createElement('td');
  const newInput = document.createElement('input'); // Buat elemen input
  const deleteBtn = document.createElement('button');
  newInput.type = 'checkbox';
  newTh.innerText = no;
  // newTd2element.id = "delete";
  newTd.innerText = input.value;

  deleteBtn.innerText = "Delete";
  deleteBtn.style.margin= "4%";
  deleteBtn.classList.add('Delete');

  newTd2.append(newInput, deleteBtn);
  newTr.append(newTh, newTd, newTd2);
  tbody.append(newTr);
  input.value = '';
  console.dir(newTd2);

  newInput.addEventListener('change',() =>{
    if(newInput.checked){
      newTd.style.textDecoration ="line-through"
    }else{
      newTd.style.textDecoration ="none"
    }
  });
})

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('Delete')) {
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
    renumberRows();
  }
})

function renumberRows() {
  const rows = tbody.querySelectorAll('tr');
  rows.forEach((row, index) => {
    row.querySelector('th').innerText = index + 1;
  });
  no = rows.length; // Update the global row counter
}

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
