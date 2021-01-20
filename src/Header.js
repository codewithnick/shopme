import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return (
    <div className="header">
      <h3>Shopme</h3>
      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon/>
      </div>
      <div className="header__nav">
        <div className="header__option">
            <span className="header_optionLineone">Hello Guest</span>
            <span className="header_optionLinetwo">Sign in</span>
        </div>
        <div className="header__option">
        <span className="header_optionLineone">Returns</span>
            <span className="header_optionLinetwo">Orders</span>
        </div>
        <div className="header__option">
        <span className="header_optionLineone">Your</span>
            <span className="header_optionLinetwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
