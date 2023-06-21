import React from "react";


const SearchBox = (props) => {
  return (
    <div>
      <input
        className="form-control"
        placeholder="Search IDMC API By Year"
        value={props.value}
        onChange={(event) => props.setSearchFilm(event.target.value)}
      />



    </div>

    //
    
    //
  );
};

export default SearchBox;
