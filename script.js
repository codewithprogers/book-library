const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.ID = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
};

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "Unread");
addBookToLibrary("Good to Great", "Jim Collins", 320, "Read");
addBookToLibrary(
  "How to Win Friends and Influence People",
  "Dale Carnegie",
  320,
  "Read",
);
addBookToLibrary("Rich Dad Poor Dad", "Robert T. Kiyosaki", 336, "Unread");

// display function
const list = document.querySelector(".book-list");
function displayBooks() {
  list.textContent = "";

  for (const book of myLibrary) {
    // create elements
    const card = document.createElement("div");
    const cardItem = document.createElement("div");
    const cardInfo = document.createElement("div");
    const coverPlaceholder = document.createElement("div");
    const coverBtn = document.createElement("button");
    const coverInput = document.createElement("input");
    const bookInfo = document.createElement("div");
    const titleAuthorWrapper = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const controlTools = document.createElement("div");
    const readStatus = document.createElement("div");
    const switchLabel = document.createElement("label");
    const toggle = document.createElement("input");
    const slider = document.createElement("span");
    const edit = document.createElement("button");
    const deleteBtn = document.createElement("button");

    // add classes and attributes
    card.classList.add("book-card");

    cardItem.classList.add("card-items");

    cardInfo.classList.add("card-info");

    coverPlaceholder.classList.add("book-cover-placeholder");

    coverBtn.classList.add("add-cover-btn");
    coverBtn.type = "button";
    coverBtn.setAttribute("aria-label", "Add book cover");

    coverInput.classList.add("cover-input");
    coverInput.type = "file";
    coverInput.name = "book-cover";
    coverInput.accept = "image/*";

    bookInfo.classList.add("book-info");

    titleAuthorWrapper.classList.add("title-author-wrapper");

    title.classList.add("book-title");

    author.classList.add("book-author");

    pages.classList.add("book-pages");

    controlTools.classList.add("control-tools");

    readStatus.classList.add("read-status");

    switchLabel.classList.add("switch");

    toggle.classList.add("toggle");
    toggle.type = "checkbox";
    toggle.name = "read-status";

    slider.classList.add("slider");

    edit.classList.add("edit");
    edit.type = "button";
    edit.setAttribute("aria-label", "Edit book info")

    deleteBtn.classList.add("delete");
    deleteBtn.type = "button";
    deleteBtn.setAttribute("aria-label", "Delete book")

    // add text / HTML content
    coverBtn.innerHTML = `<svg
                      class="add-cover"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="currentColor"
                    >
                      <path
                        d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                      />
                    </svg>`;

    title.textContent = book.title;

    author.textContent = book.author;

    pages.textContent = `${book.pages} pages`;

    readStatus.textContent = book.read;

    edit.innerHTML = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="black"
                  >
                    <path
                      d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
                    />
                  </svg>`;

    deleteBtn.innerHTML = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#e64340"
                  >
                    <path
                      d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
                    />
                  </svg>`;

    // append structure
    cardItem.append(cardInfo, controlTools);
    cardInfo.append(coverPlaceholder, bookInfo);
    coverPlaceholder.append(coverBtn, coverInput);
    bookInfo.append(titleAuthorWrapper, pages);
    titleAuthorWrapper.append(title, author);
    controlTools.append(readStatus, switchLabel, edit, deleteBtn);
    switchLabel.append(toggle, slider);
    card.append(cardItem);
    list.append(card);
  }
}

displayBooks();
