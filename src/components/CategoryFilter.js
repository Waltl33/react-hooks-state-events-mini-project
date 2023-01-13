import React from "react";

function CategoryFilter({categories}) {

 const cateBtn = categories.map((category, idx) => (
    <button key={idx}
    >{category}</button>
  ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
