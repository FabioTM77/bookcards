import React, { Component } from "react";
import FindABook from "./FindABook";
import request from "superagent";
import Library from "./Library";

class BookCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      sort: "",
    };
  }

  /*searchNewBook = () =>{
    request
      .get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField)
      .then((response) => {
        this.setState({
          books: response.body.items,
        });
      });
  }*/

  searchNewBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        this.setState({ books: [...data.body.items] });
      });
  };

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value });
  };

  handleSort = (e) => {
    console.log(e.target.value);
    this.setState({ sort: e.target.value });
  };

  cleanData = (e) => {

  };

  render() {
    return (
      <React.Fragment>
        <div>
          <FindABook
            searchNewBook={this.searchNewBook}
            handleSearch={this.handleSearch}
            handleSort={this.handleSort}
          />
          <Library books={this.state.books} />
        </div>
      </React.Fragment>
    );
  }
}

export default BookCards;

// il parametro e sta per event ed un elemento che registra il valore (e.target.value) in questo caso testo, inserito dall'utente.
