# Yocal

Check out the live app.

[Yocal Design Documents](https://github.com/hkryucr/fsp-yocal/wiki)

Yocal is a single-page web clone application inspired by Yelp to help you find restaurants near you. Yocal is built using Ruby on Rails with a PostgreSQL on the back-end, and React.js, Redux on the front-end. 

### Key Features

User Authentication
- Users can create an account and sign-in and sign-out with secure authentication.
- Users can log in through a demo account.
- Users can't post reviews and rate on the restaurant without logging in.

### Searching
Front-end searching for auto-complete function & Backend Searching for actual searching function 
- In most pages except for login and review pages, users can search for businesses.
- Users are able to see auto-complete search keywords based on names and categories of businesses.
  - By fetching the array of all categories and business names instead of fetching the entire business/category objects, users don't experience any slow down on typing search keywords. 
- Users can see the list of businesses in Google Map with markers of the businesses.


### Writing Reviews
A logged-in user is able to write his or her reviews.
A logged-in user is able to upload photos with his or her review and delete any review he or she wrote.
A logged-in user can see all reviews that he or she has written.


Technology Stack
Aerbnb is a single-page web application with one backend route responsible for rendering HTML. User interactions in the front-end side trigger AJAX requests to the back-end, which is responsible for rendering database information in JSON format.

Front-end
React
The Rails backend API is connected to a React frontend to efficiently render to the virtual DOM.

Redux
Redux manages the front-end state of Aerbnb. When database information is retrieved, Redux state is updated first and re-renders the appropriate React components.

Back-end
Ruby on Rails
Ruby on Rails is the back-end framework used to query the database.

Database
Aerbnb uses a PostgreSQL database to store its relational data.

Future Plans
Implement ability for users to upload profile pictures and edit profile page
Infinite scrolling or pagination on the index pages
Implement ability to interact with friends, i.e. messaging
Additional filters for listings

