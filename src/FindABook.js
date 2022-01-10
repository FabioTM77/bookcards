import React from "react";

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
            Clik here to search
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FindABook;
