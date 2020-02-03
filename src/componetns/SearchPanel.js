import React from 'react';


const SearchPanel = ({searchChange}) => (

        <div className="header-search">
            <label htmlFor="search">Search friends...</label>
            <input type="search"
                   id="search"
                   placeholder="..."
                   onChange={searchChange}
            />
        </div>

);
export default SearchPanel;