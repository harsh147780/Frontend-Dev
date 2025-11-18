class Book{
    constructor(title , author , isbn , isIssued = false){
        this.title = title;
        this.author = author ;
        this.isbn = isbn;
        this.isIssued = isIssued;

    }
    issueBook(){
        if(this.isIssued){
            console.log(`Book "${this.title}" is already issued.`);
        } else{
            this.isIssued = true;
            console.log(`Book "${this.title}" is issued successfully.`);
        }
    }

    returnBook(){
        if(!this.isIssued){
            console.log(`Book "${this.title}" is not issued.`)
        }else{
            this.isIssued = false;
            console.log(`Book "${this.title}" is returned successfully`);
        }
    }
}

let books = [
    new Book("The Alchemist", "Paulo Coelho", "101"),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "102"),
    new Book("Atomic Habits", "James Clear", "103"),
    new Book("Harry Potter", "J.K. Rowling", "104", true)
];

console.log("Available Books");

books
        .filter(book => !book.isIssued)
        .forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
    });

function issueBookByISBN(searchISBN) {
    let book = books.find(b => b.isbn === searchISBN);

    if (!book) {
        console.log(" Book not found!");
        return;
    }

    book.issueBook();
}



issueBookByISBN("103");
issueBookByISBN("104");
issueBookByISBN("999");