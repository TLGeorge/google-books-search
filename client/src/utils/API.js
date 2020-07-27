// 6. Add the following Express routes for your app:
// * `/api/books` (get) - Should return all saved books as JSON.
// * `/api/books` (post) - Will be used to save a new book to the database.
// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
// * `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.


// import axios from "axios";

// export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
