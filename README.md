# google-books-search
![Custom badge](https://img.shields.io/badge/GoogleBooksSearch-React-orange)
    
 
## Table of Contents
 * [Description](#Description)
 * [Installation](#Installation)
 * [Usage](#Usage)
 * [License](#License)
 * [Contributing](#Contributing)
 * [Questions](#Questions)
    
 ## Description
 Unit 2-MERN Homework: Google Books Search App
 React-based Google Books Search app. This assignment required React components, helper/util functions, and React lifecycle methods to query and display books based on user searches. Also uses Node, Express and MongoDB so that users can save books to review or purchase later.
 A Progressive Web Application (PWA). The application can be downloaded to your local pc or smart device.

 Users will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they will populate the total when brought back online.

 ## Installation
* Follow these instructions to install a PWA for your specific smartphone OS:

* iOs:

  * 1. Navigate to [https://tlg-google-books-search.herokuapp.com/](https://tlg-google-books-search.herokuapp.com/) with Safari.

  * 2. Tap the Share button in Safari.

  * 3. Tap the icon labeled Add to Home Screen.

  * 4. Tap Add in the upper-right corner.

  * 5. Name your PWA, then tap Add in the upper-right corner.

* Android:

  * 1. Navigate to [https://tlg-google-books-search.herokuapp.com/](https://tlg-google-books-search.herokuapp.com/) with Chrome.

  * 2. Tap the menu button in the upper right corner of Chrome.

  * 3. Tap the icon labeled Add to Home Screen.

  * 4. Name your PWA, then tap Add below the promp.


 ## Usage
 The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, the total will be populated when brought back online.

 Offline Functionality:
  * Enter deposits offline
  * Enter expenses offline

 When brought back online:
  * Offline entries should be added to tracker.

 ## License
 undefined

 ## Contributing
 N/A

 ## Questions
  ![GitHub Profile Pic](https://avatars.githubusercontent.com/TLGeorge)
      
    
 ## Email
  taneishalg@gmail.com
### Overview

In this activity, you'll create a new React-based Google Books Search app. This assignment requires you to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. You'll also use Node, Express and MongoDB so that users can save books to review or purchase later.

### Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

* Committing often is a signal to employers that you are actively working on your code and learning.

  * We use the mantra “commit early and often.”  This means that when you write code that works, add it and commit it!

  * Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

* Be clear and descriptive in your commit messaging.

  * When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.

* We would like you to have well over 200 commits by graduation, so commit early and often!

### Submission on BCS

* **Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!**

### Instructions

* This application requires at minimum 2 pages, check out the following mockup images for each page:

  * [Search](Search.png) - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  * [Saved](Saved.png) - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

1. Start by using the 07-Ins_Mern example as a base for your application.

2. Add code to connect to a MongoDB database named `googlebooks` using the mongoose npm package.

3. Using mongoose, then create a Book schema.

4. At a minimum, books should have each of the following fields:

* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `image` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API

* Creating `documents` in your `books` collection similar to the following:

    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```

5. Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

* The layout should include at least two React Components for each page `Search` and `Saved`.

* Feel free to try out alternative CSS framework to Bootstrap.

6. Add the following Express routes for your app:

* `/api/books` (get) - Should return all saved books as JSON.

* `/api/books` (post) - Will be used to save a new book to the database.

* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

* `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

* Deploy your application to Heroku once complete. **You must use Create React App** and current versions of React and React-Router-Dom for this assignment.

- - -

### Bonus Live Updates to Saved Books

* Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.

  * Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.

  * [Socket.io NPM package](https://www.npmjs.com/package/socket.io)



### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -
