import React from "react";
import { options } from "superagent";

const FindABook = (props) => {
  return (
    <React.Fragment>
      <div className="Search">
        <form onSubmit={props.searchNewBook}  action="">
          <input
            type="text"
            onChange={props.handleSearch}
            style={{
              width: "20%",
              border: "1px solid pink",
              background: "steelblue",
              borderRadius: "20px",
            }}
          />
          <button
            type="submit"
            style={{ borderRadius: "10px", background: "pink" }}
          >
             &#8606; Clik here to search
          </button>
          &nbsp;
          &nbsp;
          <label for="choice" style={{ borderRadius: "20px", background: "pink", border: "1px solid black", fontSize: "13.5px" }}>
            Sort for date &#8608;
          </label>
          <select name="choice" id="choice" defaultValue="Sort" onChange={props.handelSort}
          style={{
              width: "20%",
              border: "1px solid pink",
              background: "steelblue",
              borderRadius: "20px",
            }}>
            <options value="Sort">Sort</options>
            <options value="Newest">Newest</options>
            <options value="Oldest">ldest</options>
          </select>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FindABook;
