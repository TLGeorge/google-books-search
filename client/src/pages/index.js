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

import Saved from './Saved'
import Search from './Search'
// import Details from './Details'
import NoMatch from './NoMatch'

export {
    Saved,
    Search,
    // Details,
    NoMatch
}