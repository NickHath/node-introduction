let books = [];
let id = 0;

module.exports = {
  create: (req, res, next) => {
    req.body.id = id;
    id++;
    var newBook = Object.assign({}, req.body);
    books.push(newBook);
    res.status(200).send(books);
  },
  read: (req, res, next) => {
    res.status(200).send(books);
  },
  update: (req, res, next) => {
    books.map((book) => {
      if (+req.params.id === book.id) {
        book = Object.assign(book, req.body);
      }
    })
    res.status(200).send(books);
  },
  delete: (req, res, next) => {
    books = books.filter((book) => book.id !== +req.params.id);
    res.status(200).send(books);
  }
}
