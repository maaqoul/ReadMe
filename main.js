let myLibrary = JSON.parse(localStorage.getItem('myLibrary'));

function Book(thumbnail, title, author, pages, read) {
    this.thumbnail = thumbnail != "" ? thumbnail : 'https://via.placeholder.com/150';
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
    }
}
Book.prototype.toggleRead = function () {
    this.read = this.read == 0 ? 1 : 0;
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
    render();
}
function addBookToLibrary(e) {
    e.preventDefault();
    const inputs = document.getElementById("bookForm").elements;
    const thumbnail = inputs['thumbnail'].value;
    const title = inputs['title'].value;
    const author = inputs['author'].value;
    const pages = inputs['pages'].value;
    const read = Number(inputs['read'].value);
    if (title != "" && author != "" && pages != "") {
        myLibrary = [...myLibrary, new Book(thumbnail, title, author, pages, read)];
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
        render()
        window.location.href = "#";
    } else {
        const message = document.getElementById("message");
        message.innerHTML = "Please Enter all missing fields"
        setTimeout(() => message.innerHTML = " ", 3000);
    }
}
function toggleReadHandler() {
    const id = document.getElementById('remove').dataset.id;
    myLibrary[id].toggleRead();
}
function removeBook() {
    const id = document.getElementById('remove').dataset.id;
    myLibrary.splice(id, 1);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
    render();
}

function render() {
    let cardDocument = '';
    if (myLibrary.length == 0) {
        cardDocument = `<h1>No book Add yet </h1>`;
    } else {
        for (const [index, book] of myLibrary.entries()) {
            cardDocument += `<div class="book-card">
            <div class="book-card-image">
                <img src="${book.thumbnail}" alt="thumbnail">
            </div>
            <div class="book-card-body">
                <h4 id="title">Title : ${book.title}</h4>
                <p id="author">Author : ${book.author}</p>
                <p id="pages">Pages : ${book.pages}</p>
            </div>
            <div class="status">
                <div class="toggle-status">
                    <a id="toggle-read" data-id="${index}" onClick="toggleReadHandler()" class="toggle-read"> toggle </a>
                    Status : ${book.read ? 'Read' : 'Not Read Yet'}
                </div>
                <div class="remove-book">
                    <a class="remove-button" id="remove" data-id="${index}" onClick="removeBook()">Remove</a>
                </div>
            </div>
        </div>`
        }
    }

    const main = document.querySelector('.main');
    main.innerHTML = cardDocument
}

render();
document.getElementById('submit').addEventListener('click', addBookToLibrary);
