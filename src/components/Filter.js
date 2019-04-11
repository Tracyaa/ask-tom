// import React, { Component } from 'react';
import React from 'react';

const Filter = (props) => {

  return (
    <div className="filter">
      <p>filter</p>
        <select onChange={(e) => props.changeFilterTerm(e.target.value)} >
          <option name="all" value="All">All</option>
          <option name="mod" value="mod1">Mod 1</option>
          <option name="mod" value="mod2">Mod 2</option>
          <option name="mod" value="mod3">Mod 3</option>
          <option name="mod" value="mod4">Mod 4</option>
          <option name="mod" value="mod5">Mod 5</option>
        </select>
      <button onClick={() => props.clickGenerateIdea()} type="submit" name="Submit">Generate an Idea</button>
    </div>
  )
}

export default Filter;
