// 5. Create a layout similar to the mockups displayed above.
// This should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) 
// use react-router-dom
// to navigate, // hide and // show your React components without changing the route within Express.

// * The layout should include at least two React Components for each page `Search` and `Saved`.


// Search Page
// search Box form/entry
// search box results

// Saved Page
// saved container
// saved results


// 6. Add the following Express routes for your app:
// * `/api/books` (get) - Should return all saved books as JSON.
// * `/api/books` (post) - Will be used to save a new book to the database.
// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
// * `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.


import Saved from './Saved'
import Search from './Search'

export {
    Saved,
    Search
}