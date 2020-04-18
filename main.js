let myLibrary = [
    { thumbnail: 'https://via.placeholder.com/150', id: 1, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 2, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 3, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 4, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 1, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 2, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 3, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 4, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 1, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 2, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 3, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 4, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 1, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 2, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
    { thumbnail: 'https://via.placeholder.com/150', id: 3, pages: '250', title: 'harry potter', author: 'hicham maaqoul', read: true },
];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;

    this.info = function () {
        return `${this.title}, ${this.author}, ${this.numPages}, ${this.read}`;
    }
}

function addBookToLibrary() { }

function render() {
    let cardDocument = '';
    for(const book of myLibrary) {
        cardDocument+= `<div class="book-card">
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
                status
            </div>
            <div class="remove-book">
                <button class="romove-button">Remove</button>
            </div>
        </div>
    </div>`
    }
    const main = document.querySelector('.main');
    main.innerHTML = cardDocument
}

render();