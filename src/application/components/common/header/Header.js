import React from 'react';
import './Header.css';

const header = props => {
    
    return (
        <nav className="header">
            <div className="header__left">
            <button
              className="header__logo"
            >
                <h6>hello</h6>
            </button>
            </div>

            <div className="header__center">
        <div className="searchbar">
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      <div className="headerr__ight">
        <h6>kjsdckds</h6>
      </div>
            
        </nav>
    )
    // }
}

export default header;
