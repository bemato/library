let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function() {
      return "" +title+ ", " +author+ ", " +pages+ ", " +read;
    }
  }

function addBookToLibrary(){
    // Take user input and store information in book array as object.
  
    bookName = prompt('What book would you like to add?');
    bookObj = new Book(bookName);
    myLibrary.push(newBook);
}

// This function will loop through the array and display each book.
function displayBooks(){
    for (let i = 0; i < myLibrary.length; i++)
        console.log(myLibrary[i]);
}

//When button clicked, form brought up where user input book info (title, author, pages, read)