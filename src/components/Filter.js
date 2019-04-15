// import React, { Component } from 'react';
import React from 'react';

const Filter = (props) => {

  return (
    <div className="filter">
      <p>choose your mod</p>
        <select onChange={(e) => props.changeFilterTerm(e.target.value)} >
          <option name="all" value="All">All</option>
          <option name="mod" value="1">Mod 1</option>
          <option name="mod" value="2">Mod 2</option>
          <option name="mod" value="3">Mod 3</option>
          <option name="mod" value="4">Mod 4</option>
          <option name="mod" value="5">Mod 5</option>
        </select>
      <button onClick={() => props.clickGenerateIdea()} type="submit" name="Submit">Generate an Idea</button>
    </div>
  )
}

export default Filter;
