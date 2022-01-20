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
│   ├── index.css # Global styles.
│   ├── index.js # Used for DOM rendering.
│   └── Components # React components.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
├── .git
│   └── ... # git files.
├── .gitignore #
```

## Backend Server
To simplify we are using a backend server for demonstration purposes. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the relevant backend methods:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the only terms that will work with this backend, so don't be surprised if your searches for "XYZ" or "bla bla blub" don't come back with any results.
 
## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Acknowledgements
This project is part of Udacity's React Fundamentals course.