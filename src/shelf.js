function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
}


function unshelfBook(bookName, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookName) {
      shelf.splice(i, 1)
    }
  }
}


function listTitles(shelfTitles) {
  var bookTitles = []
    for (var i = 0; i < shelfTitles.length; i++) {
      bookTitles.push(shelfTitles[i].title)
  }
      return bookTitles.join(", ")
}


function searchShelf(shelf, bookName) {
    var onShelf = null
      for (var i = 0; i < shelf.length; i++) {
        if (shelf[i].title.includes(bookName)) {
          return onShelf = true
      } else {
           onShelf = false
      }
  }       return onShelf
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
