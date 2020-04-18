let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;

    this.info = function() {
        return `${this.title}, ${this.author}, ${this.numPages}, ${this.read}`;
    }
}

function addToLibrary() {}