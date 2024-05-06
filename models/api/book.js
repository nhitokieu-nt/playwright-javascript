export function BookModel(bookObj) {
    this.isbn = bookObj.isbn;
    this.title = bookObj.title;
    this.subTitle = bookObj.subTitle;
    this.author = bookObj.author;
    this.publish_date = bookObj.publish_date;
    this.publisher = bookObj.publisher;
    this.pages = bookObj.pages;
    this.description = bookObj.description;
    this.website = bookObj.website;
}

export function CollectionOfIsbn(listOfIsbns) {
    return listOfIsbns.map(isbn => ({ isbn }));
}

export function AddListOfBooksModel(userId, listOfIsbns) {
    this.userId = userId;
    this.collectionOfIsbns = CollectionOfIsbn(listOfIsbns);
}
