function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
}


function addBook(libraryName, bookName) {
  libraryName.shelves[bookName.genre].push(bookName)
}
// Below is the first way I solved this test, but after learning about bracket notation
// for objects, I feel like the code above is a more dynamic way to solve it.
//     if (bookName.genre === "fantasy") {
//       libraryName.shelves.fantasy.push(bookName)
//   } else if (bookName.genre === "nonFiction") {
//       libraryName.shelves.nonFiction.push(bookName)
//   } else if (bookName.genre === "fiction") {
//       libraryName.shelves.fiction.push(bookName)
//   }
// }


function checkoutBook(libraryName, bookTitle, bookGenre) {
  for (var i = 0; i < libraryName.shelves[bookGenre].length; i++) {
    if (libraryName.shelves[bookGenre][i].title === bookTitle) {
      libraryName.shelves[bookGenre].splice(i, 1)
        return `You have now checked out ${bookTitle} from the ${libraryName.name}`
    }
  }     return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
