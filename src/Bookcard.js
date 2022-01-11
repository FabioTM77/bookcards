import React from "react";


const Bookcard = (props) => {
  return (
    <React.Fragment>
    
<div className="cards">
<img src={props.image} alt=""/>
<div className="desc">
  <h2>{props.tittle}</h2>
  <h3>{props.author}</h3>
  <p>{props.publishDate}</p>
</div>



</div>







    </React.Fragment>
  );
};

export default Bookcard;