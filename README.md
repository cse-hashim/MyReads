# [MyReads](https://cse-hashim.github.io/MyReads/) App

It is a small [React](https://reactjs.org/) App which can organize your Reads in such a nice way.
- https://cse-hashim.github.io/MyReads/

---

## Prerequisites

- install [Node.js](https://nodejs.org/) on your machine.
- install [git](https://git-scm.com/) on your machine.

---

## Instalation

### clone the repository 

```bash
git clone https://github.com/cse-hashim/MyReads.git
```

### Use the package Manager [npm](https://www.npmjs.com/) to install MyReads App
```bash
npm install
```


---
## Usage

### For development usage:

```bash
npm start
```
### Open http://localhost:3000 to view it in your browser.

---

## Specifications

### Application setup
 - the appliucation was created with create-react-app and requires only `npm install` and `npm start` to get it installed and launched.
 - README is updated to descibe the project and has instructions for installing and launching the project included.

### Main page

 - the main page shows 3 shelves for books. each book is shown on the correct shelf, along with its title and all of its authors.
 - the main page shows a control that allows users to move books between shelves. the control is tied to each book instance. the functionality of moving a book to a different shelf works correctly.
 - when the browser is refreshed, the same information is displayed on the page.

### Search page
 - the search page has a search input field
 - the search page behaves correctly:
     - when user types into the search field books that match the query are displayed on the page along with their titles and authors.
     - search results are not shown when all of the text is deleted out of the search input box
     - invalid queries are handled and prior search results are not shown
     - the search works correctly when a book does not have a thumbnail or an author
     - the user is able to search for multiple words such as "artificial intelligence"
 - search results on the search page allow the user to select currently reading wand to read or read to pace the book in a certain shelf
 - when an item is categorized on the search page and the user navigates to the main page it appears on that shelf in the main page

### routing 
- the main page contains a link to teh search page when the link is clicked the search page is displayed and the url in the browser's address bar is search
- the search page contains a link to the main page when the l

### code functionality 
- state is passed up down
- set state is used
- Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
- code runs without errors or warnings

### Extras
 - short time consecutive request in search input cancelles each others and the last one only is executed.
 - search status is shown: loading, showing, prompt.
 - rating is implemented
 - missing image and authors are handled.
 - some css is modified
 - cancel request facility is added withing the project
 - shelf of the book is modified in the main and in the search pages.
 - error handling is used withing the project
 - When an item is categorized on the search page, the modification is shown withing the search page on the dropdown menu to indicate the current shelf of the book
 
---

## License
[MIT](https://choosealicense.com/licenses/mit/)