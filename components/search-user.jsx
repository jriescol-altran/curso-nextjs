import React from "react";

function SearchUser({ value, setValue, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => onSearch()}>Ir a</button>
    </div>
  );
}

export default SearchUser;
