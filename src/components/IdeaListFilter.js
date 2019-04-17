import React, { Component } from 'react'

export default class IdeaListFilter extends Component {

	render() {
		return(
			<div className="select-dropdown idea-list-dropdown">
              <select onChange={this.props.handleChange}>
                <option value="All">All</option>
                <option value="1">Mod 1</option>
                <option value="2">Mod 2</option>
                <option value="3">Mod 3</option>
                <option value="4">Mod 4</option>
                <option value="5">Mod 5</option>
              </select>  
            </div>
        )
    }
}