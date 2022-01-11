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
            /*title={}
            author={}
            image={}
            published={}*/
            
            
            
            
            
            />)
        })

}



        </div>







    </React.Fragment>
  );
};

export default Library;