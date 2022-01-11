import React, {Component} from 'react';
//import React from "react";
import "./App.css";
import Header from "./Header";
import BookCards from "./BookCards";


class App extends Component {
  render(){
  return (
    <React.Fragment>
    <div className="App">
        <Header />
      </div>
      <br />
      <br />
      <div>
        <BookCards />
      </div>
    </React.Fragment>
  );
  }
}

export default App;

/*const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
      </div>
      <br />
      <br />
      <div>
        <BookCards />
      </div>
     
    </React.Fragment>
  );
};*/

//export default App;

/* 






*/
