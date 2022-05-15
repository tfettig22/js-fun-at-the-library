function createTitle(bookTitle) {
  return `The ${bookTitle}`
}


function buildMainCharacter(characterName, characterAge, characterPronouns) {
  return {
    name: characterName,
    age: characterAge,
    pronouns: characterPronouns,
  }
}


function saveReview(addReview, reviews) {
    for (var i = 0; i < reviews.length; i++) {
      if (addReview === reviews[i]) {
        return reviews
    }
  }     return reviews.push(addReview)
}
// Another way to pass this test using the .includes method:
//   if (reviews.includes(addReview)) {
//     return reviews
//   }  else {
//     reviews.push(addReview)
//   }
// }


function calculatePageCount(bookTitle) {
  return 20 * bookTitle.length
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: 20 * bookTitle.length,
    genre: bookGenre,
  }
}


function writeBook(dragonTitle, dragonCharacter, dragonGenre) {
  return {
    title: dragonTitle,
    mainCharacter: dragonCharacter,
    pageCount: 20 * dragonTitle.length,
    genre: dragonGenre,
  }
}


function editBook(reducedBook) {
  return reducedBook.pageCount = reducedBook.pageCount * .75
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
