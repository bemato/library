let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {
      (read) ? read = 'read' : read = 'not read';
      return "Title: " +title+ " Author: " +author+ " Pages: " +pages+ " Read: " +read;
    }
  }

function addBookToLibrary(){
  //variables to store form input
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  myLibrary.push(new Book(title, author, pages, read));
}

// This function will loop through the array and display each book.
function displayBooks(){
    //remove previous book lists.
    while(library.hasChildNodes())
      library.removeChild(library.childNodes[0]); 
    
    //display books currently in library array
    for (let i = 0; i < myLibrary.length; i++){
      let book = document.createElement('li');
      let removeBtn = document.createElement('button');
      let readBtn = document.createElement('button'); //This button will read/unread the book.

      book.textContent = myLibrary[i].info();
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove');

      readBtn.textContent = 'Read/Unread';
      readBtn.classList.add('read');

      book.appendChild(removeBtn);
      book.appendChild(readBtn);
      
      library.appendChild(book);
    }
}

//When button clicked, form brought up where user input book info (title, author, pages, read)
const newButton = document.querySelector('.new');
const form = document.querySelector('.form');
const addButton = document.querySelector('.add');
const library = document.querySelector('.library ul');
const removeButton = document.querySelectorAll('.remove');
const readBtn = document.querySelectorAll('.read');

newButton.addEventListener('click', function(){
  form.style.display = 'block';
});

addButton.addEventListener('click', () => {
  addBookToLibrary();
  displayBooks();
  
  //reset form
  form.style.display = 'none';
  form.reset(); 
});

removeButton.forEach(element => {
  element.addEventListener('click', () => {
    
  });
});



