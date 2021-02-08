let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {
      (this.read) ? read = 'read' : read = 'not read';
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
  //display books currently in library array
    for (let i = 0; i < myLibrary.length; i++){
      let book = document.createElement('li');
      let removeBtn = document.createElement('button');
      let readBtn = document.createElement('button'); //This button will read/unread the book.

      book.textContent = myLibrary[i].info();
      book.setAttribute('data-index', i);

      removeBtn.textContent = 'Remove';
      readBtn.textContent = 'Read/Unread';
      
      //add event listener to remove button allowing book to be removed from myLibrary[]
      removeBtn.addEventListener('click', () => {
        let index = removeBtn.parentElement.getAttribute('data-index'); //The index where the book is stored in myLibrary[]
        myLibrary.splice(index, 1);
        resetBooks();
        displayBooks();
      });

      //add event listener to read/unread button to change status of book to read/unread.
      readBtn.addEventListener('click', () => {
        if (myLibrary[i].read === true){
          myLibrary[i].read = false;
        }
        else {
          myLibrary[i].read = true;
        }

        console.log(myLibrary[i]);
        resetBooks();
        displayBooks();
      });

      book.appendChild(removeBtn);
      book.appendChild(readBtn);
      
      library.appendChild(book);
    }
}

// this function resets books in the DOM.
function resetBooks(){
    while(library.hasChildNodes())
    library.removeChild(library.childNodes[0]); 
}

//When button clicked, form brought up where user input book info (title, author, pages, read)
const newButton = document.querySelector('.new');
const form = document.querySelector('.form');
const addButton = document.querySelector('.add');
const library = document.querySelector('.library ul');

newButton.addEventListener('click', function(){
  form.style.display = 'block';
});

addButton.addEventListener('click', () => {
  resetBooks();
  addBookToLibrary();
  displayBooks();
  
  //reset form
  form.style.display = 'none';
  form.reset(); 
});