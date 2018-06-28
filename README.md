# MyReads Project
This is the source for MyReads web-app build using React.

### About
This is a bookshelf app that lets users to select and categorize books that they have read, currently reading or want to read. 

### Setup
Install dependencies.
```sh
$ npm install
```

Start server. 
```sh
$ npm start
```

Navigate to ```localhost:3000``` to access the application.

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.