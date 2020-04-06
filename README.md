# Yocal

Check out the live app.

[Yocal Design Documents](https://github.com/hkryucr/fsp-yocal/wiki)

Yocal is a single-page web clone application inspired by Yelp to help you find restaurants near you. Yocal is built using Ruby on Rails with a PostgreSQL on the back-end, and React.js, Redux on the front-end. 

### Screenshot
![](https://portfolio-henry.s3-us-west-1.amazonaws.com/Yocal_Overall_App.gif)

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


### Technology Stack
Yocal is a single-page web application with technology stacks as follows: 

#### Back-end
Ruby on Rails 
Yocal uses Ruby on Rails - active record - to query the database on the back-end.
#### Database
Yocal uses a PostgreSQL database to store its relational data and AWS S3 to store the photos with active record storage.
 
#### Front-end
#### React & Redux
Yocal uses React on the frontend to efficiently render to the virtual DOM. Also Redux manages the state connected to the Rails backend. 

### Future Plans
- Enable users to be friends with each other and interact by messaging or checking their reviews.
- Make users upload multiple photos at once on the restaurants (currently, users can upload a photo only by uploading a review).
- Additional filters for searching.

