import React from 'react';
import SearchBar from '../components/SearchBar/searchbar';
// import ResultCard from '../components/ResultCard/resultcard'
import API from '../utils/API';
import Results from '../components/Results/results';
import ResultCard from '../components/ResultCard/resultcard';

// function Search() {
//     // Setting our component's initial state
//     const [books, setBooks] = useState([])
//     const [search, setSearchForm] = useState({})

//     // Handles updating component state when the user types into the input (search) field
//     function handleInputChange(event) {
//         const { name, value } = event.target;
//         setSearchForm({ [name]: value })
//     };

//     // When the form is submitted, use the API.saveBook method to save the book data
//     // Then reload books from the database
//     function handleFormSubmit(event) {
//         event.preventDefault();
//         if (search.query) {
//             API.googleBooksSearch(search.query)
//                 .then(res => {
//                     console.log(res)
//                     setBooks(res.items)})
//                 .then(setSearchForm({}))
//                 .catch(err => console.log(err));
//         }
//     };
//     function saveBook(book) {
//         console.log(book)
//         API.insertBook(book)
//     }

class Search extends React.Component {
    render() {

        return (
            <container>
                <div>
                    <br></br>
                    <SearchBar />
                    {/* <Results /> */}

                </div>
            </container>


        )
    }
}


export default Search;