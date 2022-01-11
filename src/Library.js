import React from "react";
import Bookcard from "./Bookcard";

const Library = (props) => {
  return (
    <React.Fragment>
    
        <div className="card-box">  
        {
        
        props.books.map((book, i) => {
            return(
            <Bookcard
            key={i}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks}
            published={book.volumeInfo.publishDate}
            
            
            
            
            
            />)
        })

}



        </div>







    </React.Fragment>
  );
};

export default Library;