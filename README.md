# MyReadly

This is a little React web app to keep track of books that you have, want to, or are currently reading.

## TL;DR

To get started_

1. `git clone` this repository and `cd` into it
1. install all project dependencies via `npm install`, checkout the dependencies in 'package.json'
2. start the development server with `npm start` and interact with it

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # Short collection of available search terms (the API is just for demonstration purposes).
├── package.json # npm package manager file.
├── src
│   ├── App.css # Styles for the app.
│   ├── App.js # This is the root of the app.
│   ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not implemented
│   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for API usage are below.
│   ├── icons # Helpful images for the app.
│   │   ├── add.svg
│   │   ├── arrow-back.svg
│   │   └── arrow-drop-down.svg
│   ├── index.css # Global styles.
│   └── index.js # Used for DOM rendering.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
├── .git
│   └── ... # git files.
├── .gitignore #
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
 
## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Acknowledgements
This project is part of Udacity's React Fundamentals course.